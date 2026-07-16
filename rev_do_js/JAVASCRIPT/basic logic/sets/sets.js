// SETS -> "Array" s/ valores repetidos

const numbers = new Set([5, 1, 4, 22, 98, 3011, 5, -32])
console.log(numbers)

// // Métodos

numbers.add(2) //adicionar elementos
number.delete(5) //remover elementos
number.has(5) //verifica se um  elemento existe
number.clear() //remove todos os elementos
number.size() //qtde de elementos 
for(const number of numbers.values()){ //mostra elemento por elemento do array
    console.log(number);
}
// Mostra elemento por elemento do array
numbers.forEach((number) =>{
    console.log(number);
})

// Exemplo 1
 import {text} from "@clack/prompts";

async function main() {
    const input = await text({ message: "Digite vários números: "});

    const inputNumbers = input.split(" ").map(Number)
    const numbers = new Set(inputNumbers)
    console.log(inputNumbers);
    console.log(numbers);
}
main();

// Exemplo 2 -> Itens iguais, um tem letra maiúscula, outro minúscula
const mySet = new Set(["amanda", "Maria", "Amanda"]); //os três serão exibidos, o js diferencia "A" de "a".
console.log(mySet);

// Exemplo 3 ->  Uso de objetos, permite criar e ter objetos repetidos
const mySet = newSet([{name:"Julia"}])
mySet.add({name:"Julia"})
console.log(mySet)

//Exemplo 4 -> Array de true e false: Não permite valores repetidos
const mySet = newSet([true, false, true])
