// OBJETOS -> PROPRIEDADES E MÉTODOS
 //outra forma de acesso a lista de objetos com variáveis

// Exemplo 1 - personagem de um jogo
const player = {
    nickname : "Jujuba",
    health: 20,
    isDead: false,
    present(){
        console.log("Meu nick é", this.nickname)
    }
}

//Exibir a propriedade
console.log(player.nickname)

// Acessar propriedades
player.nickname // forma 1
player["nickname"] //forma 2

//Acessar propriedade ainda não criada
player.name = "Carolina"
console.log(player)

// Métodos criados dentro do objeto player
player.present()

// Iterar objetos com o array
for(const prop in player){
    console.log(prop)
}


// Exemplo 2 - Computador

const computer = {
    motherboard: "B360w",
    videoCard: "RTX 2070",
    cpu: "Intel i7 8700",
    font :{
        name: "XPG Core Reactor",
        watts: 800,
    },
    case:{
        name: "Draco GameMax",
        color: "Black",
    },
    // Array com objetos dentro
    ram: [
        {
        name: "X",
        size: 16000,
        },
        {
        name: "X",
        size: 16000,
        },
        
    ],
}

console.log(computer.font.watts)
console.log("Informações do computador: ")
console.log("Placa mãe: ", computer.motherboard)
console.log("Placa de vídeo: ",computer.videoCard)
console.log("CPU: ", computer.cpu)
console.log("Fonte: ", computer.font.name, computer.font.watts, "Watts")
console.log("Gabinete: ", computer.case.name, computer.case.color)
for(const ram of computer.ram){
    console.log(ram.name, ram.size, "MBs.")
}

// Explicação
const r1 = require("node: readline"); //importa readline
const prompt = r1.createInterface({ //método createInteface c/ propeirdades -> inpput e output
   input: process.stdin,
   output: process.stdout 
})

console.log(process)
prompt.question() //método question
