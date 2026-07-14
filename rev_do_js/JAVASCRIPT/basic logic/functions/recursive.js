// FUNÇÕES RECURSIVAS

// Exemplo 1
function countdown(number){
   if(number < 1) return; //condição de parada para a recursão que virá abaixo, evitando loop infinito
   setTimeout(() =>{
       console.log(number);
       countdown(number - 1);
   }, 1000)
}

countdown(5);

// Exemplo 2
function sum(number, result=0){
    if(number <= 1){ //condição de parada que evita loop infinito da recursão
        return result;
    }
    return sum(number-1, result + number);
}
console.log(sum(3));

// Exemplo 3 -> Recursão infinita!
function exec(number){
    console.log(number);
    exec(number+1);
}

exec(1);

