//Strings

//1) Aspas duplas("")

  const prefix = "Desenvolvedor"

//2)Template Strings(``): Permite inserir variáveis dentro

//Exemplo 1
  const myName = `${prefix} Julia`
  console.log(myName)

//Exemplo 2
const result = 8 + 2
const text = `O resultado é: ${result} `
console.log(text)

//Exemplo 3 -> C/ objects
const person = {
    name: "Julia"
}
const text = `Objeto: ${JSON.stringify(person)}`
console.log(text)

//Exemplo 4 -> Quebra de linha
const text = `Programa javascript
Seja bem vindo`;
console.log(text)


//3) FORMAS DE CONCATENAÇÃO 

// Exemplo 1
const myName = "Julia"
const text = "Bem vindo(a)" + myName + "!"
const text = `Bem vindo(a) ${myName} !`

// Exemplo 2
let result;
const frase = 2 + "2"
const texto = true + "2"
const trecho = result + "2"
console.log(frase)
console.log(texto)
console.log(trecho)

// 4) MÉTODOS COM STRINGS

const word = "HignVoltage"
const phrase = "Eu/sou-ju/dev"

console.log(word[0]) // índice 0
console.log(word.length) // qtde de letras
console.log(word.toUpperCase()) // letras maiúsculas
console.log(word.toLowerCase()) // letras minúsculas
console.log(word.include("y")) // letra "y" tem nessa palavra? True(se tiver) e false(se não tiver)
console.log(word.startsWith("H")) // A palavra começa com essa letra/ trecho? Js diferencia letra grande de letra pequena
console.log(word.endsWith("e")) // A palavra termina com essa letra/ trecho? Js diferencia letra grande de letra pequena
console.log(word.slice(0, 3)) //corta a palavra (começo, fim)
console.log(word.replace("Voltage", "Vltg3")) // substitui uma palavra por outra
console.log(word.repeat(3)) // Qtde de repeticões de uma palavra

const chars = word.split(" ") //separa por espaço
console.log(chars)

const phrases = phrase.split("-") //separa por traço
const p = phrase.join("_") //une por underline

// Barra invetida

// \n -> quebra de linha
// \t -> espaçamento
// \r -> some com o texto que o antecede
// \"qwerty"\ ou \'qwerty'\ -> usar as aspas





 
