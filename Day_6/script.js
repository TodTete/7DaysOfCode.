const categories = ['Frutas', 'Lácteos', 'Congelados', 'Dulces', 'Otros'];
let shopping = createEmptyGroups(categories);

const startBtn = document.getElementById('startBtn');
const clearBtn = document.getElementById('clearBtn');
const groupsContainer = document.getElementById('groups');

startBtn.addEventListener('click', runPromptFlow);
clearBtn.addEventListener('click', () => {
  shopping = createEmptyGroups(categories);
  renderGroups();
  alert('Lista reiniciada.');
});

renderGroups();

function createEmptyGroups(cats){
  const obj = {};
  cats.forEach(c => obj[c] = []);
  return obj;
}

function runPromptFlow() {
  while (true) {
    const opcion = prompt("¿Qué desea hacer?\n1) Añadir alimento\n2) Eliminar alimento\n3) Salir").trim();
    if (!opcion) continue;

    if (opcion === '3') break;

    if (opcion === '1') {
      let alimento = prompt("Ingrese el nombre del alimento:").trim();
      if (!alimento) { alert("Nombre inválido."); continue; }

      const listaCat = categories.map((c,i)=>`${i+1}) ${c}`).join('\n');
      let cat = prompt(`Seleccione la categoría:\n${listaCat}`).trim();
      const categoria = resolveCategory(cat);
      shopping[categoria].push(alimento);
      alert(`${alimento} agregado a ${categoria}`);
    } 
    else if (opcion === '2') {
      if (isListEmpty()) {
        alert("La lista está vacía. No hay nada que eliminar.");
        continue;
      }
      let item = prompt("Escriba el nombre exacto del alimento que desea eliminar:").trim();
      if (!item) continue;
      const eliminado = removeItem(item);
      if (eliminado) alert(`${item} eliminado de la lista.`);
      else alert(`¡No fue posible encontrar "${item}" en la lista!`);
    } 
    else {
      alert("Opción inválida. Intente nuevamente.");
    }
  }
  renderGroups();
}

function resolveCategory(input){
  const num = Number(input);
  if (!isNaN(num) && num >= 1 && num <= categories.length) return categories[num-1];
  const norm = normalizeStr(input);
  for (const c of categories) if (normalizeStr(c) === norm) return c;
  return 'Otros';
}
function normalizeStr(s){
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function removeItem(item){
  for (const cat of categories) {
    const idx = shopping[cat].indexOf(item);
    if (idx !== -1) {
      shopping[cat].splice(idx,1);
      return true;
    }
  }
  return false;
}
function isListEmpty(){
  return categories.every(c => shopping[c].length === 0);
}

function renderGroups(){
  groupsContainer.innerHTML = '';
  for (const cat of categories) {
    const div = document.createElement('div');
    div.className = 'group';
    div.innerHTML = `<h3>${cat}</h3><p>${shopping[cat].join(', ') || '—'}</p>`;
    groupsContainer.appendChild(div);
  }
}
