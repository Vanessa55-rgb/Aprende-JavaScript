// Operaciones short-circuit puede ser el corto circuito que se genera cuando nosotros trabajan con cableado electrico 

/**
 *  Valores evaluan en falso 
 * false 
 * 0 
 * '' 
 * string vacios 
 * null 
 * undefined 
 * NaN */

let nombre = 'Vanessa feliz';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('Soy funcion 1')
    return true;
    // return false
}

function fn2() {
    console.log('Soy funcion 2')
    return true;
}

let x = fn1() && fn2();