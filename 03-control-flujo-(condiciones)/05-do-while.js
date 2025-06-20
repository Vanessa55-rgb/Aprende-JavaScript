// Cuales son los numeros pares

let i = 2; 
// Si esta utilizando while la condicion se va a ejecutar al inicio (i < 2)
/* while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero par', i); // Imprimi el valor de i 
    }
    i++; // Incrementa el valor de i en 1 
} */

// Pero si esta utilizando do while la condicion se va a ejecutar al final (i < 2)
do {
    if (i % 2 == 0) {
        console.log('Numero par', i); // Imprimi el valor de i 
    }
    i++; // Incrementa el valor de i en 1 
} while (i < 2); 