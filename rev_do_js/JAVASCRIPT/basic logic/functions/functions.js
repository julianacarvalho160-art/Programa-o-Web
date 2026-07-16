//FUNÇÕES
//function identificador (){}

//Exemplo 1 -> Comum:
function imprimir(){
    console.log("Olá mundo!");
}
imprimir();

//Exemplo 2 -> Com parâmetro:
function greet(name){
    console.log(`Seja Bem-Vindo, ${name}!`);
}
greet("Maria");

//Exemplo 3 -> Chamada de função por variável:
function sum(a, b){
    return a + b;
}
const result = sum(2, 3); // teste com ("2", 3) = 23 na saída.
console.log(result);


//Exemplo 4 -> "Hoisting": Declara o resultado, chama a função e depois cria-a, então ela sobe no arquivo lá para cima, o que NÃO gera erro. Com variáveis já GERA erro!
const result = sum(6, 3);
console.log(result);

function sum(a, b){
    return a + b;
}

//Exemplo 5 -> Arrow Function:
//ERRO! CRIE A FUNÇÃO, DEPOIS CHAME-A!
const results = sums(6, 3);
console.log(results);

const sums = (a, b) => {
    return a + b;
}

//CORRETO!
const sums = (a, b) => {
    return a + b;
}
const results = sums(6, 3);
console.log(results);


//Exemplo 6 -> Arrow function c/ um bloco de código:
const sum = (a, b) => a + b;
const result = sum(6, 3);
console.log(result);

//Exemplo 7 -> Fatorial de um número:
let factorial = (number) => {
let result = 1;
for(let i = 1; i <= number; i++){
    result *= i;
}
console.log(result);
}
factorial(4);
factorial(7);

//Exemplo 8 - IIFE(Imediately invoked function expression) -> Função executada imediatamente e apenas 1 vez:
((name) => {
    console.log(`Seja Bem-Vindo ${name}!`);
})("Julia");

//Exemplo 9 - Parâmetros opcionais:
function createTag(name, prefix, suffix){
     if(prefix && suffix) return `${prefix} ${name} ${suffix}`;
     if(prefix) return `${prefix} ${name}`;
     return name;
}
const tag = createTag("Julia", "[Developer]", "Dev");
console.log(tag);


//Exemplo 10 - Expoente:
function pow(number, exponent){
    return number ** exponent;
}
console.log(pow(2)); // saída: NaN, se exponent não for passado parâmetro, ou seja exponent = undefined.
console.log(pow(5, 4)); // solução 1.
// solução 2: declarar exponent na função  = 2.

//Exemplo 11 - Mudança de argumento, mudança de saída da função:
function greet (name, log=false){
    const text = `Seja Bem-Vindo(a) ${name}`;
    if(log){
        console.log(text);
        return;
    }
    return text; 
}
const text = greet("Julia"); // com 1 parâmetro = retorna texto.
const Texxt = greet("Ju", true); // com 2 parâmetros = retorna nada.



