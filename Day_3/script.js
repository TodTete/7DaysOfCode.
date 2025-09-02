function startGame() {
  alert("Bienvenido al juego de decisiones de programación 🚀");

  // Paso 1: elegir área
  let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?");
  
  if (area.toLowerCase() === "front-end") {
    let techFront = prompt("¿Quieres aprender React o Vue?");
    alert("Has elegido aprender " + techFront + " en el área de Front-End.");
  } 
  else if (area.toLowerCase() === "back-end") {
    let techBack = prompt("¿Quieres aprender C# o Java?");
    alert("Has elegido aprender " + techBack + " en el área de Back-End.");
  } 
  else {
    alert("Opción no válida. Terminando el juego.");
    return;
  }

  // Paso 2: especialización o fullstack
  let camino = prompt("¿Quieres seguir especializándote en tu área o convertirte en Fullstack?");
  if (camino.toLowerCase() === "especializarme") {
    alert("¡Excelente! Convertirse en un experto en tu área es un gran camino 👏");
  } else if (camino.toLowerCase() === "fullstack") {
    alert("¡Genial! Ser Fullstack te permitirá dominar múltiples áreas 💻🌐");
  } else {
    alert("Opción no válida, pero sigamos...");
  }

  // Paso 3: nuevas tecnologías con while
  let seguir = "ok";
  while (seguir.toLowerCase() === "ok") {
    let nuevaTech = prompt("¿Qué otra tecnología te gustaría aprender?");
    alert("¡Interesante! " + nuevaTech + " es una gran elección para tu futuro.");
    seguir = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar o cualquier otra cosa para salir)");
  }

  alert("¡Gracias por jugar! Sigue aprendiendo y explorando nuevas tecnologías 🚀");
}
