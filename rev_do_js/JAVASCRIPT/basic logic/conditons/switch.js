//SWITCH

// switch (valor){
//    case "esperado" : {
//       . . .
//       break;
//    }
// }


//Exemplo 1
const animal = "gato";
switch(animal){
    case "gato" : {
        console.log("Miau!");
        break;
    }
    case "galinha" : {
        console.log("Cocoricó!");
        break;
    }
    case "cachorro": {
        console.log("Au au!");
        break;
    }
    case "pato" : {
        console.log("Quá quá quá!");
        break;
    }
    case "pássaro": {
        console.log("bem te vi!");
        break;
    }
    default :{
        console.log("Não listado!");
    }
}

//O break garante que apenas que um bloco de código seja executado. Sem ele, todas as instruções são executadas independentemente se é verdadeiro ou falsa a condição.

//Exemplo 2
const r1 = require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output:process.stdout
});

console.log("Bem vindo ao programa!");
console.log("[1] 📅 Data atual.");
console.log("[2] 🕑 Horário atual.");
console.log("[3] 🐮 Ver animais.");
console.log("[4] 🍕 Ver comidas.");
console.log("[5] 💻 Ver linguagens.");
console.log("[0] ❌ Sair.");

prompt.question("Selecione o que deseja fazer: ", answer =>{
   switch(answer){
      case "1":{
        const date=  new Date();
        const day = date.getDate();
        const mouth = date.getMonth()+1;
        const year = date.getFullYear();
        console.log(`Hoje é ${day}/${mouth}/${year}`);
        break;
      }

      case "2":{
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        console.log(`Agora são ${hours}/${minutes}`);
        break;
      }
   
      case "3":{
        console.log("Gato");
        console.log("Cachorro");
        console.log("Galinha");
        console.log("Vaca");
        break;
      }
   
      case "4":{
        console.log("Pizza");
        console.log("Bolo");
        console.log("Macarrão");
        break;
      }

      case "5":{
        console.log("Javascript");
        console.log("Java");
        console.log("Pascal");
        console.log("Python");
        break;
      }
     default: {
        console.log("Fim do programa!");
     }
    }
    prompt.close();
})
