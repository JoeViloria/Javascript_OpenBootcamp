// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
let setFam = new Set(["María", "Pedro", "Juan", "Carla"]);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFam.add("Juan");

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFam.add("Javascript");

console.log(setFam);
