// CONDICIONAIS:

// if (expressão) {
//  instrução -> true
//}else{
//  instrução -> false
//}

//Exemplo 1:
let temperature = 25;
if(temperature >= 30){
    console.log("Está muito quente lá fora!");
}else{
    console.log("A temperatura está agradável.");
}

//Exemplo 2:
let grade = 7.5;

if(grade >= 9){
    console.log("Aprovado!");
} else if (grade >= 7){
    console.log("Aprovado na média!");
} else{
    console.log("Reprovado. Estude mais na próxima vez.");
}

//Exemplo 3:
const sideA = 3;
const sideB = 4;
const sideC = 5;

if(sideA === sideB && sideB === sideC){
    console.log("O triângulo é equilátero.");
} else if (sideA === sideB || sideB === sideC || sideA === sideC){
    console.log("O triângulo é isósceles.");
}else{
    console.log("O triângulo é escaleno.");
}

//Exemplo 4:
const r1 = require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output:process.stdout
});
prompt.question("Digite sua idade", answer =>{
    const age =Number.parseInt(answer);
    if(Number.isNaN(age)){
        console.log("O que você digitou não é um número válido!");
    }else{
        console.log(`A sua idade é ${age}`);
    }
    prompt.close();
})

//Exemplo 5:
const r1 = require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output:process.stdout
});
let bank = 3000;
console.log(`Valor total no banco: ${bank}`);
prompt.question("💵 Digite o valor que deseja transferir: ", answer =>{
    const amount = Number.parseInt(answer);
    if(Number.isNaN(amount)){
        console.log("❌O que você digitou não é um número válido!");
    }else if(amount > bank){
        console.log(`❌O valor especificado é maior que o total`);
    } else if(amount <= 0){
       console.log("❌O valor deve ser um número positivo!");
    }else{
        bank -= amount;
        console.log(`✅Você transferiu ${amount} reais`);
        console.log(`Agora o valor total no banco é: ${bank} reais`);
    }
    prompt.close();
})

//Exemplo 6
const performance = "ótimo";
const baseSalary = 50000;
let bonus = 0;

if(performance === "ótimo"){
    bonus = baseSalary * 0.2;
}else if (performance === "muito bom"){
    bonus = baseSalary * 0.15;
} else if(performance === "bom"){
    bonus = baseSalary * 0.1;
} else if(performance === "regular"){
    bonus = baseSalary * 0.05;
}else{
    console.log("Desempenho não reconhecido. Sem bônus.");
}

console.log(`Bônus calculado: $${bonus.toFixed(2)}`); // flutuantes com 2 casas decimais


//Exemplo 7
const sum = 1 + 1;
// == Compara se um valor é igual ao outro
if(sum == "2"){
    console.log("Sum is 2!");
}else{
    console.log("Sum is not 2!");

}
// === compara se o tipo de var é o mesmo
if(sum === "2"){
    console.log("Sum is 2!");
}else if(sum === 3){
    console.log("Sum is 3!");
}else{
    console.log("Sum is not 2!");
}

