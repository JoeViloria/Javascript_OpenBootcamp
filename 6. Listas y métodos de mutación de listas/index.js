// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Arroz", "Carne", "Leche", "Queso", "Pan"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFav = [
    {
        titulo: "The Shawshank Redemption",
        director: "Frank Darabont",
        fecha: new Date("1994, 10, 14"),
    },
    {
        titulo: "Inception",
        director: "Christopher Nolan",
        fecha: new Date("2010, 07, 16"),
    },
    {
        titulo: "The Dark Knight",
        director: "Christopher Nolan",
        fecha: new Date("2008, 07, 18"),
    },
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let nuevaLista = peliculasFav.filter(
    (peliculasFav) => peliculasFav.fecha > new Date(2010, 0, 1)
);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculasFav.map((peliculasFav) => {
    return peliculasFav.director;
});

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculasFav.map((peliculasFav) => {
    return peliculasFav.titulo;
});

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresTitulos = directores.concat(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación
let directoresTitulos_prop = [...directores, ...titulos];
