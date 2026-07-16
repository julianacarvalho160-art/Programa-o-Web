// ESCOPOS -> VISIBILIDADE DOS CÓDIGOS P/ VARIÁVEIS E FUNÇÕES:

// 1 - BLOCO: Permite que uma variável do tipo "let" ou "const" seja visível apenas dentro de um bloco, como função, laço, etc. se tornando como uma espécie de "variável local" que não pode ser acessada fora dele.

//Exemplo 1 -> const e let: ERRO!
if(true){
    const myName = "Julia";
    let myAge = 22;
}
console.log(myName);
console.log(myAge);

//Exemplo 2 -> let: ERRO!
for(let i = 0; i < 10; i++){
  let b = "Spike";
}
console.log(b);

//Exemplo 3 -> let: ERRO!
while(true){
   let c = "Mike";
}
console.log(c);

//Exemplo 4 -> var, uma espécie de "variável global", que pode ser acessada fora de um bloco:
if(true){
    var nickname = "Jujuba";
}
console.log(nickname);


//2- FUNÇÃO: Nenhuma variável, seja let, const ou var pode ser acessada fora dela.

//Exemplo 1 - As três variáveis:
function main(){
    var myHobbies = "Ler livro";
    const favColor = "Blue";
    let favBook = "O Tempo e o Vento";
}
console.log(myHobbies);
console.log(favBook);
console.log(favColor);


//3 - LÉXICO: Permite o acesso a uma variável "X" que não está dentro do bloco ou função e sim está no arquivo.js como um todo. 
//O javascript busca a variável "X" dentro do bloco, não encontrando,  busca fora dele, em algum lugar do arquivo.js e ao encontrar, acessa-a.


//Exemplo 1 - > Acessar myname que está fora da função.
const myNames = "Lorena";
function show(){
    console.log(myNames);
}
mostrar();

//Exemplo 2 -> Acessar uma variável que está na função secundária: ERRO!
function main(){
    function secundary(){
        let number = 1;
    }
    secundary();
    console.log(number);
}

//Exemplo 3 -> Acessar a variável do escopo acima: RODA!
function main(){
    let number = 1;
    function secundary(){
        console.log(number);
    }
    secundary();
}

//Exemplo 4 -> Deixe os códigos acima comentados e tente adivinhar qual dos dois nomes será exibido na tela.
const myName = "Fulano";
function main(){
    const myName = "Amanda";
    function terciary(){
        console.log(myName);
    }
    terciary();
}
main();