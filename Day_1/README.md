# 📘 Día 1 - Comparación de valores en JavaScript

En este primer día del **#7DaysOfCode**, el reto consistió en comprender las diferencias entre el uso de **`==`** y **`===`** en JavaScript.

## 📝 Descripción del reto
JavaScript permite comparar valores con:
- `==` (igualdad no estricta): compara los valores, realizando conversión implícita de tipos.
- `===` (igualdad estricta): compara tanto el valor como el tipo, sin conversión implícita.

Esto puede generar resultados inesperados, como:
```javascript
console.log(false == '0');      // true
console.log(null == undefined); // true
console.log(" \t\r\n" == 0);    // true
console.log(' ' == 0);          // true
