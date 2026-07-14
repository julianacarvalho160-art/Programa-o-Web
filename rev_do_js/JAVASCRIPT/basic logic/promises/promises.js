// Promise

function sum(a, b){
    return a + b;
}
console.log(sum(3, 2));

//Função com chamada de recurso externo: Serviros/API, sem tempo definido para a chegada da resposta, pode demorar ou não, a função assíncrona entra aqui.

// Exemplo 1 -> App de carro por aplicativo 
function requestCar(driversDispo){
    return new Promise((resolve, reject)=>{
       if(driversDispo > 0){
        return resolve("Seu motorista está a caminho!")
       }else{
        return reject("Não há motoristas dispoíveis!")
       }
    })
}
// Resolve -> c/ sucesso
// Reject -> c/ falha

// FORMA 1: TRATANDO "NA MÃO"
function main(){
    let drivers = 2;
    const request = requestCar(drivers);

    // Se sucesso:
    request.then((text)=>{
        console.log("Promessa concluída!", text);
    })
    // Se erro
    .catch((err)=>{
       console.log("Promessa rejeitada!", err);
    })
    // Independente do resultado
    .finally(()=>{
        console.log("Fim da promessa!");
    })
}

// FORMA 2: c/ async/await + tratando direitinho

async function main(){
    let drivers = 2;
    const request = await requestCar(drivers).catch(() => null); //catch -> promisse rejeiitada retorna null

    // Verificação
    if(!request){
        console.log("Erro"); //promisse rejeitada
        return;
    }
    console.log(request) //promisse concluída com sucesso!

    console.log(request);
}

main();

// Exemplo 2

function getRandom(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(Math.random() * 30)
        }, 3000)
    })
}
async function main(){
   console.log("Início do programa")
   getRandom().then(value =>{
    console.log(value)
   })
   console.log("Fim do programa");
}
main();

// Exemplo 3
import {setTimeout} from "node:timers/promises";
async function getNumber(){
    return 5;
}

async function main () {
    console.log("Início do programa");
    const value = await getNumber ();
    console.log(value + 1)
}
main();

// Exemplo 4
