// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
let fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
let fechaNacimiento = new Date("1994-09-12");
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let compararFechas = fechaHoy > fechaNacimiento;
console.log(compararFechas);

// - Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let añoNaciemiento = fechaNacimiento.getFullYear();
console.log(añoNaciemiento);
