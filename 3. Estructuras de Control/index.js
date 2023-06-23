// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let factorial_1 = 1;

for (let i = 1; i <= 10; i++) {
  factorial_1 *= i;
}

console.log(factorial_1);

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let factorial_2 = 1;
let j = 1;

while (j <= 10) {
  factorial_2 *= j;
  j++;
}

console.log(factorial_2);

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let factorial_3 = 1;
let k = 1;

while (true) {
  factorial_3 *= k;

  if (k === 10) {
    break;
  }

  k++;
}

console.log(factorial_3);
