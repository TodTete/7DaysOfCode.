# 📘 Día 7 - Calculadora (Funciones separadas)

En este séptimo día del **#7DaysOfCode** (Alura LATAM) se desarrolló una calculadora en JavaScript donde **cada operación aritmética está implementada como una función independiente**.

## 📝 Descripción
La aplicación permite:
- Seleccionar la operación (Suma, Resta, Multiplicación, División).
- Ingresar dos valores (acepta decimales).
- Obtener el resultado (con manejo de errores, p. ej. división por cero).
- Ver un historial de operaciones en la sesión, eliminar entradas o exportarlo.

## ✅ Operaciones (funciones)
- `sumar(a, b)` → devuelve `a + b`
- `restar(a, b)` → devuelve `a - b`
- `multiplicar(a, b)` → devuelve `a * b`
- `dividir(a, b)` → devuelve `a / b` (devuelve `null` si `b === 0`)

## 📁 Archivos
- `index.html` → Interfaz gráfica (Tailwind CSS).
- `script.js` → Lógica y funciones separadas.
- `README.md` → Documentación.

## 🚀 Uso
1. Abrir `index.html` en el navegador.
2. Elegir operación, escribir los dos valores y hacer clic en **Calcular**.
3. Consultar el resultado y el historial en la columna derecha.

## 💡 Notas
- El historial se guarda en `sessionStorage` (se borra al cerrar la pestaña).
- Se ofrece exportación a archivo de texto y eliminación individual del historial.


Desarrollo realizado como parte de **#7DaysOfCode** por **Alura LATAM**.
