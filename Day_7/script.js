
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b === 0 ? null : a / b; }

// --- Evaluador de expresiones ---
function evaluarExpresion(expr) {
  // Quitar espacios
  expr = expr.replace(/\s+/g, "");

  // Validar solo números y operadores
  if (!/^[0-9+\-*/.]+$/.test(expr)) {
    throw new Error("Expresión no válida");
  }

  // Convertir en tokens (números y operadores)
  const tokens = expr.match(/(\d+(\.\d+)?|[+\-*/])/g);

  // 1. Resolver * y /
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*" || tokens[i] === "/") {
      const a = parseFloat(tokens[i - 1]);
      const b = parseFloat(tokens[i + 1]);
      let r = tokens[i] === "*" ? multiplicar(a, b) : dividir(a, b);
      if (r === null) throw new Error("División por cero");
      tokens.splice(i - 1, 3, r.toString());
      i--;
    }
  }

  // 2. Resolver + y -
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+" || tokens[i] === "-") {
      const a = parseFloat(tokens[i - 1]);
      const b = parseFloat(tokens[i + 1]);
      let r = tokens[i] === "+" ? sumar(a, b) : restar(a, b);
      tokens.splice(i - 1, 3, r.toString());
      i--;
    }
  }

  return parseFloat(tokens[0]);
}

// --- DOM ---
const exprInput = document.getElementById("expression");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const resultEl = document.getElementById("result");
const historyList = document.getElementById("historyList");

let history = [];

calcBtn.addEventListener("click", () => {
  const expr = exprInput.value.trim();
  if (!expr) return;

  try {
    const r = evaluarExpresion(expr);
    resultEl.textContent = r;
    addHistory(expr, r);
  } catch (err) {
    resultEl.textContent = "❌ " + err.message;
  }
});

clearBtn.addEventListener("click", () => {
  exprInput.value = "";
  resultEl.textContent = "—";
});

function addHistory(expr, result) {
  history.unshift({ expr, result });
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((h) => {
    const div = document.createElement("div");
    div.className = "py-1";
    div.textContent = `${h.expr} = ${h.result}`;
    historyList.appendChild(div);
  });
}
