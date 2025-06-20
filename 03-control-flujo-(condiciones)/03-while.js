// Condicion de codigo mas de una vez

/** While
 * Do while
 * For
 * For in
 * For ot
 */

// En general todo realizan la misma tarea, pero tiene sutiles diferentes.

/* while (condicion) {
    variable (si esta condicion se cumple, se ejecuta dentro del parentesis de llaves)
} */

/* let i = 0;
while (i < 10) {
    console.log(i); // Imprimi el valor de i 
    i++; // Incrementa el valor de i en 1 
    Aumentar el valor de i, cuando llegue a 10 ya no se ejecuta mas
} */

let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numero par', i); // Imprimi el valor de i 
    }
    i++; // Incrementa el valor de i en 1 
}
console.log('Fuera del while');