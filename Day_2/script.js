function iniciar() {
  // Preguntas al usuario
  const nombre = prompt("¿Cuál es tu nombre?");
  const edad = prompt("¿Cuántos años tienes?");
  const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

  // Mensaje personalizado
  alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

  // Ejercicio opcional
  const gusto = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

  if (gusto == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
  } else if (gusto == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
  } else {
    alert("Respuesta no válida, pero sigue adelante con tus estudios.");
  }
}
