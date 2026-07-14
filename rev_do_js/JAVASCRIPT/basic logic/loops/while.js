// WHILE

// Exemplo 1 -> Contagem do menor para o maior
let count = 0;
while(count < 10){
    console.log(count)
    count++;
}

// Exemplo 2  -> Contagem do maior para o menor
let counts = 10;
while(count > 0){
    console.log(counts);
    counts--;
}

// // Exemplo 3 -> Exibe a quantidade de iterações feitas pelo loop
const x = 20;
let playerX = 0;
while(playerX < x){
    console.log("🚶".padStart(playerX, "."));
    playerX++;
}

// // Exemplo 4
let current;
let times = 0;
const expected = 8;

while(current !== expected){
    current = Math.floor(Math.random() * (50+1))
    console.log(current)
    times++;
}
console.log(times);

// Exemplo 5 -> Uso do break como critério de parada do loop
let count = 0;
while(count <= 20){
  if(count == 8){
    break;
  }
  console.log(count);
  count++;
}
// Exemplo 6 -> Uso do continue como para pular instruções do loop
let count = 0;
while(count <= 20){
    count++;
  if(count % 2 == 0){
    console.log(count, "é par.")
    continue;
  }
  console.log(count, "não é par");
}

// Exemplo 7 -> uso de Do While
const r1 = require("node:readline");

const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
});

function question(query){
    return new Promise((resolve) =>{
        prompt.question(query, resolve);
    })
}

async function main(){
let number;

do{
    const answer = await question("Digite um número qualquer: ");
    number = Number.parseInt(answer);

    if(Number.isNaN(number)){
        console.log("❌ O que você digitou é inválido!")
    }
} while(Number.isNaN(number)); 

prompt.close();
console.log(`Você digitou ${number}`)
}

main();