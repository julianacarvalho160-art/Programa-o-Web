
// ESTE É SEU PRIMEIRO COMANDO!
console.log("Hello World")

// Sempre criar variáveis com nomes em inglês, com nomes explicativos, evitar: enumerar, abreviar, como test1, test2, variáveis com nomes repetidos, com caracteres especiais no início como let = 1nome ou @nome

// $ e _ podem estar nos nomes das variáveis


// 1 - VARIÁVEIS

// const  -> só acessa dentro do escopo de função,  declarada um vez, depois fica inaulterável, sem reatribuição, utilizar para valores fixos.
const meuNome = "Rincko"
console.log(meuNome)

// let -> só acessa dentro do escopo de função, declarada uma vez permite reatribuição, usar p/ valores que serão modificados ou reatribuídos.
{
    const nome = "Julia"
}
console.log(nome) // ERRO!

// var -> variável global, pode ser acessada fora do escopo: NÃO RECOMENDADO!
{
    var nomes = "Julia"
}
console.log(nomes) // Liso!

// Tipos de variáveis
 let String = "Texto"
 let number = 22;
 let boolean = true;
 const array = []
 const object = {}
 const func = () => {}
 const date = new Date()


 
//BOOLEANOS

// Truthy and falsy

// 1) Truthy -> Valores verdadeiros

// Números diferentes de zero: 12, 1, 4, -5, 82, 44;
// Strings não vazias: "A" 'blue';
// True: booleano;
// Objetos e funções vazias: { }, {name: "Julia"} {age: 22}, () => {}

// 2)Falsy

// Números: 0 ou -0
// Strings vazias: " ", '', ``
// Null e undefined
// NaN

// Exemplo 1
let result = parseInt("texto");
if(result){
    console.log("O resultado é: "), result
}else{
    console.log("Sem resultado")
}

// Exemplo 2 -> Transformando em booleano
const result = "";
console.log(Boolean(result))

//Exemplo 3
console.log(2 == 3)
console.log(2 == 2)

 
 //NULL E UNDEFINED
 const x = null; // valor vazio, sem nada
 const y = undefined; // variável sem tipo definido 

