// MAP - Executa uma função em uma lista e retorna uma nova lista com a função aplicada

//DESAFIO:  MULT todos os num *2
// const numbers = [1, 2, 3, 4, 5]

// const numberMultipliedByTwo = numbers.map(function(number){
//     return number * 2
// })
// console.log(numbers)
// console.log(numberMultipliedByTwo)


// FILTER- Filtra uma lista e a retorna em uma nova lista
// DESAFIO: Retornar uma nova lista só que apenas com números pares

const ages = [8, 13, 27, 30, 22, 40];
// const evenAges = ages.filter(function(age){
//     return age % 2 === 0;  
// });
// console.log(ages);
// console.log(evenAges);

// REDUCE: 
// DESAFIO:Somar todas as idades - Reduzir todos os valores para 1 só;
//age -> item da lista
// accumulator -> valor atual da u´ltima soma
//0 -> o valor inicial da soma é 0;
// adiciona  accuulator + age -> 0 + 8 = 8
// 8 + 13 = 21
const sumOfAges = ages.reduce(function(age, accumulator){
   return accumulator + age;
}, 0);
console.log(sumOfAges);