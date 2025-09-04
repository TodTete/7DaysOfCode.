const defaultCategories = ['Frutas', 'Lácteos', 'Congelados', 'Dulces', 'Otros'];
let shopping = createEmptyGroups(defaultCategories);

const startBtn = document.getElementById('startBtn');
const clearBtn = document.getElementById('clearBtn');
const groupsContainer = document.getElementById('groups');

startBtn.addEventListener('click', runPromptFlow);
clearBtn.addEventListener('click', () => {
  shopping = createEmptyGroups(defaultCategories);
  renderGroups();
  alert('Lista reiniciada.');
});

renderGroups(); 

function createEmptyGroups(categories){
  const obj = {};
  categories.forEach(c => obj[c] = []);
  return obj;
}

function runPromptFlow() {
  while (true) {
    const agregar = prompt("¿Desea agregar un alimento a la lista de compras? (sí / no)").trim().toLowerCase();
    if (!agregar || !['sí','si','s','no','n'].includes(agregar)) {
      alert("Respuesta inválida. Por favor responda 'sí' o 'no'.");
      continue;
    }
    if (['no','n'].includes(agregar)) break;

    // nombre del alimento
    let alimento = prompt("¿Qué alimento desea agregar? (ej. zanahoria)").trim();
    if (!alimento) {
      alert("Nombre inválido. Intentemos de nuevo.");
      continue;
    }

    // elegir categoría
    const opciones = defaultCategories.map((c,i) => `${i+1}) ${c}`).join('\n');
    let cat = prompt(`Seleccione la categoría (escriba número o nombre):\n${opciones}`).trim();
    if (!cat) {
      alert("Categoría inválida. Intentemos otra vez.");
      continue;
    }

    const categoria = resolveCategory(cat);
    shopping[categoria].push(alimento);

    // confirmación breve en consola
    console.log(`Agregado: ${alimento} → ${categoria}`);
  }

  // mostrar resultado final
  const salida = buildOutputText(shopping);
  alert(salida.summaryAlert);
  console.log(salida.fullConsole);
  renderGroups();
}

function resolveCategory(input) {
  // acepta número (1..n) o nombre (case-insensitive)
  const num = Number(input);
  if (!Number.isNaN(num) && num >= 1 && num <= defaultCategories.length) {
    return defaultCategories[num - 1];
  }
  // normalizar acentos y minúsculas para comparar
  const norm = normalizeStr(input);
  for (const c of defaultCategories) {
    if (normalizeStr(c) === norm) return c;
  }
  return 'Otros';
}

function normalizeStr(s){
  return s.toString().trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function formatList(arr){
  if (!arr || arr.length === 0) return '';
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} y ${arr[1]}`;
  const allButLast = arr.slice(0, -1).join(', ');
  const last = arr[arr.length - 1];
  return `${allButLast} y ${last}`;
}

function buildOutputText(groups) {
  let summaryAlert = 'Lista de compras:\n\n';
  let fullConsole = 'Lista de compras (detallada):\n';
  for (const cat of defaultCategories) {
    const formatted = formatList(groups[cat]);
    summaryAlert += `${cat}: ${formatted || '(vacío)'}\n`;
    fullConsole += `${cat}: ${formatted || '(vacío)'}\n`;
  }
  return { summaryAlert, fullConsole };
}

function renderGroups(){
  groupsContainer.innerHTML = '';
  for (const cat of defaultCategories) {
    const div = document.createElement('div');
    div.className = 'group';
    const h3 = document.createElement('h3');
    h3.textContent = cat;
    const p = document.createElement('p');
    const items = shopping[cat];
    p.textContent = items.length ? formatList(items) : '—';
    div.appendChild(h3);
    div.appendChild(p);
    groupsContainer.appendChild(div);
  }
}
