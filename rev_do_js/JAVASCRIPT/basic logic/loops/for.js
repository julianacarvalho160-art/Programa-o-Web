// LAÇO FOR
//for(inicialização, condição, execução){}

//FORMAS DE USAR OS LOOPS - FOR:

//1) Imprime a lista de carros, tendo como critério de parada o tamanho da lista:
const cars = ["Ferrari", "Tesla", "Mercedes"];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//2)Selecionando item por item por vez:
for(let car of cars ){
    console.log(car);
}

//3) A cada iteração exibe o índice e o item da lista até a lista acabar:
cars.forEach(function(car, index){
    console.log(index);
    console.log(car);
})


//4) FOR IN:
const person = {
    names: "Jane",
    age:21,
};
for(property in person){
    console.log(person[property]);
}

// Exemplo 1 -> 0 a 9:
for(let i = 0; i < 10; i++){
   console.log(i);
}

// Exemplo 2 -> 0 a 10:
for(let i = 0; i <= 10; i++){
   console.log(i);
}

// Exemplo 3 -> inserção de valores em um array:
const numbers = [];
for(let i = 0; i <= 10; i++){
    numbers.push(i);
}
console.log(numbers);

// Exemplo 4 -> Com intervalo de tempo:
for(let i = 0; i <= 10; i++){
   setTimeout(() =>
     console.log(i),
     2000 * i
   );
}

// Exemplo 5 -> Mostrar elementos de um array
const fruits = ["maçã", "banana", "laranja", "uva"];
for( let i = 0; i < fruits.length; i++){
    console.log(fruits[i]); // length = tamanho
}

// Exemplo 6 -> Saber quantas vezes uma letra se repete dentro de uma palavra:
const text = "Se inscreva no canal do youtube: Rincko Dev";
const letter = "a";
let times = 0;
for(const char of test.toLowerCase()){
    if(char === letter) times++;
}
console.log(`A letra (${letter}) se repete ${times} vezes`);

// Exemplo 7 -> com entrada do usuário: Tabuada

const r1 = require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output:process.stdout
});
prompt.question("Qual número deseja ver na tabuada?", answer => {
    const number = Number.parseInt(answer);

    if(Number.isNaN(number)){
        console.log("O número digitado é inválido!")
    }else{
        console.log(`A tabuada do ${number} é: `);
        for(let i = 1; i <= 10; i++){
            console.log(`${i} X ${number} = ${i * number}`)
        }
    }
    prompt.close();
})