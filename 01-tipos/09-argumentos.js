// Parametros
function suma(a, b) { 
    console.log(arguments); //  variable especial para poder acceder a todoslos valores que se pasana argumentos 
    return a + b; // Retorna el valor 2 + 2 
}

// Argumentos
let resultado = suma(5, 6, 1 ,2, 3);  
console.log(resultado);
console.log(typeof suma); // Tipo de variables