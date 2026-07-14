// DESESTRUTURAÇÃO

// Exemplo 1 ->  Extrair propriedades de um objeto
function main(){
    const person = {
        name: "Julia",
        age: 22,
        isProgrammer: true,
    }

    const {name, age, isProgrammer} = person;
    //console.log(name, age, isProgrammer)
}
main();

// Exemplo 2 -> Extrair elementos de um array
function main(){
    const colors = ["verde", "amarelo", "azul", "rosa", "laranja"]
    const[firstColor, secondColor] = colors
   // console.log(firstColor)
}
main();

// Exemplo 3 -> Diferentes formas de se extrair
function main(){
const nickname = "Lucíllia"

const player = {
    nickname: "LittlePochita",
    health: 20,
    inventory: {
        items: ["sword", "shield", "bow"],
        potions: [
            {type: "regeneration", duration:8},
            {type: "defense", duration: 8},
        ],
    },
}
//FORMA 1: Acessando a uma propriedade com o mesmo nome de uma variável da função
const {nickname: nick, health} = player; // nomePropriedade: nomeVarPropriedade
console.log(nickname, nick)

//FORMA 2: Acessar a propriedade com todos os seus elementos
const {inventory} = player // acessar a todo o inventário
console.log(inventory)

//FORMA 3: Acessar a um elemento específico de uma propriedade
const {items, potions} = inventory // ou const {inventory: {potions}} = player
console.log(items); // acessar a um elemento do inventário
console.log(potions); //acessar a um elemento do inventário

//FORMA 4: Extrair chave e valor do objeto de um array 
const [{type, duration}, secondPotion] = potions
console.log(type, duration)

//FORMA 5: Extrair chave e valor de 2 objetos de um array 
const [{type, duration}, {type: secondType, duration: secondDuration}] = potions
console.log(type, duration)
console.log(secondType, secondDuration)

//FORMA 6: Desestruturação X Acesso por índice
const {inventory: {potions: [{type, duration}]}} = player //Desetruturação
const type = player.inventory.potions[0].type //acesso por índice

}
main();

