// TRATAMENTO DE ERROS

// Exemplo 1 -> Trata o erro para o código não travar, não "dar pau"
// "type":"module" -> package.json

import {readFile} from "node:fs/promises";

//FORMA 1:
async function main(){
    let file;
    try{ //pega o trecho de código
        file = await readFile("./index.js");
    } 
    catch(error){ //se o código gerar erro, ele:
        file = error
    }
    console.log(file);
    console.log("Fim do programa");
}
//FORMA 2:
async function main(){
    try{ //Pega o trecho de código
       const file = await readFile("./tips.js");
       console.log(file.toString());
       console.log("Teste...")
    } 
    catch(error){ //se o trecho gerar erro, ele imprime na tela
        console.log("Não foi possível ler o arquivo!")
    }
    console.log("Fim do programa");
}
main();

//Exemplo 2 -> 

function upper (text){
    return text
}