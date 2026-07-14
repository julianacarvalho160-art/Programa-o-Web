// Callbacks

//// FORMA 1: Com o nome function
//// 1- Criar a função
function Callback(){
    console.log("OK!")
}
//// 3 - Colocar a função como parâmetro
function main(Callback){
    console.log("Hello World");
    Callback(); //4- chama o parâmetro aqui
}
//// 2 - Passar como argumento
main(Callback);

// FORMA 2: 
const Callback = () =>{
    console.log("OK!")
}
function main(Callback){
  console.log("....")
  Callback();
}
main(Callback)

//FORMA 3: Arrow function
function main(Callback){
  console.log("....")
  Callback();
}
main(() => {
    console.log("Ok!")
})



// Exemplo 1:
function favSong(){
    console.log("Hign Voltage")
}
function main(favSong){
    console.log("Esta é a música que eu queria te mostrar!")
    favSong();
    
}
main(favSong);

// Exemplo 2: 
function exec(){
    console.log("1 + 1 =", 1 + 1);
}
console.log("Início do programa")
setTimeout(exec, 2000)
console.log("Fim do programa")


// Exemplo 3:
const r1 = require("node:readline")
const prompt = r1.createInterface({
    input: process.stdin,
    output: process.stdout  
});
// FORMA 1
const myQuestion = "Qual é o seu nome?"
const handle = (answer) => {
    console.log(`Olá, ${answer}`)
    prompt.close();
}
prompt.question(myQuestion, handle);
// Parâmetros: O que  aparece no terminal + callback

// FORMA 2
prompt.question("Qual é o seu nome?", (answer) =>{
    console.log(`Olá, ${answer}`)
    prompt.close();
})

// Exemplo 4

const numbers = [1, 2, 3, 4];

// FORMA 1
function printNumber(number){
    console.log("Número: ", number);
}
numbers.forEach(printNumber)

// FORMA 2
numbers.forEach(number => console.log("Número: ", number));
