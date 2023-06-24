// - Una cadena de texto con tu Nombre
const nombre = "Joe";
console.log(nombre);

// - Otra cadena de texto con tu Apellido
const apellido = "Viloria";
console.log(apellido);

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length;
console.log(numeroLetras);

// - Una variable que contenga la primera letra del Nombre
let primeraLetraNombre = nombre.slice(0, 1);
console.log(primeraLetraNombre);

// - Otra variable que contenga la última letra del Apellido
let ultimaLetraApellido = apellido.slice(apellido.length - 1);
console.log(ultimaLetraApellido);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let espaciosEstudiante = estudiante.trim();
console.log(espaciosEstudiante);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreEstudiante = estudiante.includes(nombre);
console.log(nombreEstudiante);
