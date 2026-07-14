// MÓDULOS -> Exporta função "sum" p/ math.js

////Package.json UTILIZANDO -> "type" : "commonjs"

function sum(a, b){
   return a + b;
}
function sub(a, b){
   return a - b;
}

// FORMA 1: Exportação que permite importar somente como variável
module.exports = sum

// FORMA 2: Exportação que permite importar  no outro arquivo como variável ou desestruturação
// É melhor quando se quer exportar várias funções de uma só vez
module.exports = {sum, sub }


// FORMA 3: Criar a função diretamente dentro do módulo de exportação 
module.exports = {
   sum(a, b){
      return a + b
   },
   
   sub(a, b){
      return a - b
   }
}

////Package.json UTILIZANDO -> "type" : "module"

// FORMA 1: S/ default
export function sum(a, b){
   return a + b;
}
export function sub(a, b){
   return a - b;
}

// FORMA 2: S/ default
function sum(a, b){
   return a + b;
}
function sub(a, b){
   return a - b;
}
export{sum, sub}

// FORMA 3: C/ default
function sum(a, b){
   return a + b;
}
function sub(a, b){
   return a - b;
}
export default{sum, sub}

