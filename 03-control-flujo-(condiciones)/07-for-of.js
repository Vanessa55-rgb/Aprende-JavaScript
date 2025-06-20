/** While
 * Do while
 * For
 * Tienen en comun: nos permite a nosotros como calcular la iteracion
 */

let animales = ['Chanchito feliz', 'Dragon', 'Perrito'];

for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}