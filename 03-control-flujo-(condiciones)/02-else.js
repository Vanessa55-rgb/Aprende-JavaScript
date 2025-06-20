// Solo cuando se cumpla una condicion utilizar la condicion else

/** Ejemplo con dos condiciones
 * Si 
 * Sino
 */

// Las evaluaciones (condiciones) se van a realizar de arriba hacia abajo se cumple la que se va a ejecutar, el resto ignorado

let edad = 28;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad > 13 ) {
    console.log('Usuario necesita estar acompañado de sus padres');
} else {
    console.log('Usuario menor de edad');
}