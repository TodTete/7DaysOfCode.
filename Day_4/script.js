let numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intentos = 3;

function playGame() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const result = document.getElementById("result");
  const attempts = document.getElementById("attempts");

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
    result.textContent = "⚠️ Ingresa un número válido entre 0 y 10.";
    return;
  }

  if (userGuess === numeroSecreto) {
    result.textContent = "🎉 ¡Felicidades! Adivinaste el número secreto.";
    attempts.textContent = "";
    document.getElementById("guessInput").disabled = true;
    return;
  } else {
    intentos--;
    if (intentos > 0) {
      result.textContent = "❌ Incorrecto. Intenta de nuevo.";
      attempts.textContent = `Te quedan ${intentos} intentos.`;
    } else {
      result.textContent = `😢 Lo siento. El número era ${numeroSecreto}.`;
      attempts.textContent = "";
      document.getElementById("guessInput").disabled = true;
    }
  }
}
