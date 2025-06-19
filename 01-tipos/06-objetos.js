// personaje de tv

let nombre =  "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre : "Tanjiro",
    anime : "Demon slayer",
    edad : 16,
};
console.log(personaje)
console.log(personaje.nombre) // Forma para acceder a las propiedades de un objeto
console.log(personaje['Anime']); // Forma para acceder a las propiedades de un objeto

personaje.edad = 13; // Forma para modificar una propiedad 

let llave = 'edad';  // Forma para modificar una propiedad
personaje[llave] = 13; 

delete personaje.anime; // Forma para eliminar una propiedad
console.log(personaje);