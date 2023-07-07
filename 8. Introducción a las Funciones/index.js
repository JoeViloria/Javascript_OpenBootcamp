// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function alwaysTrue() {
    return true;
}

console.log(alwaysTrue()); // Output: true

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function promesa() {
    await delay(5000);
    console.log("Hola soy una promesa");
}

promesa();

// - Una función generadora de índices pares automáticos
function* evenIndexGenerator() {
    let index = 0;
    while (true) {
        yield index;
        index += 2;
    }
}

// Crear una instancia del generador
const generator = evenIndexGenerator();

// Obtener los primeros 5 índices pares
console.log(generator.next().value); // 0
console.log(generator.next().value); // 2
console.log(generator.next().value); // 4
console.log(generator.next().value); // 6
console.log(generator.next().value); // 8
