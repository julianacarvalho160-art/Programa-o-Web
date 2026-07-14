// OPERADORES ARITMÉTICOS 

// ADIÇÃO: +
// SUBTRAÇÃO: -
// MULTIPLICAÇÃO: *
// DIVISÃO: /
// MÓDULO: %

// Exemplo 1
const sum = 28 + 2;
const sub = 14 - 3;
const mult = 1000 * 2;
const div = 10/ 2;
const rest = 10 % 3; //resto da divisão.
console.log(sum)
console.log(sub)
console.log(mult)
console.log(div)
console.log(rest)

// Exemplo 2
const x = 6
const y = 4
const result = x + y
console.log(result)

// Exemplo 3
const calc = (x * 2)- y
console.log(calc)

// Exemplo 4
const price = 340;
const percentage = 25;
const discount = (price * percentage) /100;
const finalPrice = price - discount;
console.log("Preço do produto:", price);

// Exemplo 5
const salary = 1412
console.log("Por mês:", salary);
console.log("Em um ano:", salary * 12);
console.log("Por semana:", salary / 4);
console.log("Por dia:", salary / (7 * 4));

// Exemplo 6
console.log(`Um minuto tem ${60} segundos`)
console.log(`Uma hora tem ${60 * 60} segundos`)
console.log(`Um dia tem ${60 * 60 * 24} segundos`)
console.log(`Uma semana tem ${60 * 60 * 24 * 7} segundos`)
console.log(`Um ano tem ${60 * 60 * 24 * 7 * 365} segundos`)

// Exemplo 7 - Mesma coisa que o anterior só que com variáveis
const minute = 60;
const hour = minute * 60;
const day = 24 * hour;
const week = day * 7;
const year = day * 365;

console.log(`Um minuto tem ${minute} segundos`)
console.log(`Uma hora tem ${hour} segundos`)
console.log(`Um dia tem ${day} segundos`)
console.log(`Uma semana tem ${week
} segundos`)
console.log(`Um ano tem ${year} segundos`)

// Exemplo 8
 const number = 5;
 console.log(number.toString()); //  converte num p/ string
 console.log(typeof number.toString()); // diz o tipo de var do num.
