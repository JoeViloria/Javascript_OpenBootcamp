// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datosPersonales = {
    nombre: "Joe",
    apellido: "Viloria",
    edad: 28,
    altura: 188,
    eresDesarrollador: true,
};
console.log(datosPersonales);

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = datosPersonales.edad;
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let mejoresAmigos = [
    datosPersonales,
    {
        nombre: "Pedro",
        apellido: "Castillo",
        edad: 30,
        altura: 175,
        eresDesarrollador: false,
    },
    {
        nombre: "Albert",
        apellido: "Pujols",
        edad: 32,
        altura: 170,
        eresDesarrollador: true,
    },
];
console.log(mejoresAmigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let listaOrdenada = mejoresAmigos.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);
