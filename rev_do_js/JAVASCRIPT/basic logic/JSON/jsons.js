//JSON -> Formato universal.
//TIP: Para gerar os arquivos com a extenção .json, pode ser necessária a execução no terminal com o node nomearquivo.js.

//O arquivo .json não permite criação de funções, e vírgula no último dado.

//Chamar o arquivo .json + exibi-lo.
import json from "./person.json" with {type: "json"};
console.log(json);

//Acessar propriedades do arquivo em json:
console.log(json.name);
console.log(json.name);

//json fica neste arquivo aqui:
const person = "{\"name\": \" Julia\"}";

//Converte formato String json para objeto javascript -> Parse:
const person = JSON.parse("{\"name\": \" Julia\"}");
console.log(person);

//Converte objeto javascript p/ formato string json -> Stringfy:
const person = {
    name: "Ju",
    age: 22,
    isProgrammer: true,
    greet () {
        console.log("Meu nome é:", this.name);
    }
}
const StringJson = JSON.stringify(person);
console.log(StringJson);

//Operações com json:

//Exemplo 1: Criando e lendo um arquivo json:
import {writeFileSync, readFileSync} from "node:fs";

const person = {
    name: "Ju",
    age: 22,
    isProgrammer: true,
    greet () {
        console.log("Meu nome é:", this.name);
    }
}
//Criar arquivo json:
writeFileSync("./newperson.json", JSON.stringify(person, null, 2), "utf8");//null 2 é p/ formatar o arquivo.

//Ler arquivo json:
const StringJson = readFileSync("./newperson.json", "utf8");
console.log(StringJson);
const json = JSON.parse(StringJson);
console.log(json);

//Exemplo 2: 
const Player = {
    nickname: "GuaravitaGamer09",
    health: 20,
    isDead: false,
    present(){
        console.log(`Eu sou a ${this.nickname}`);
    },
    getHealth(){
        return  this.health.toFixed(2);
    },
    damage (amount){
        const updatedHealth = this.health - amount;
        if(updatedHealth <= 0){
            console.log(this.nickname, "morreu!");
            this.health = 0;
            this.isDead = true;
        }
        this.health = updatedHealth;
        console.log(this.nickname, "recebeu", amount, "de dano");
    }
}
writeFileSync("./player.json", JSON.stringify(Player, null, 2), "utf8");
const StringPlayer = readFileSync("./player.json", "utf8")

//Exemplo 3:Uso com API:
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}

// Exemplo 4: C/ classes:
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    displayInfo(){
        console.log(`Nome: ${this.name}, Idade: ${this.age}`);
    }
}

const person = new Person("Lili", 12);
const person2 = new Person("Lalá", 12);
const person3 = new Person("Lolô", 12);
writeFileSync("./person.json", JSON.stringify([person, person2, person3], null, 2), "utf-8");


//Exemplo 5:
const todos = [
{
    id:1,
    description: "Estudar programação",
    isCompleted: false,
},
{
    id:2,
    description: "Ler",
    isCompleted: true,
},
{
    id:3,
    description: "Treinar",
    isCompleted: true,
},
];

//Passar para a API, converter para JSON antes -> Envio para o servidor:
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//Acessar um caractere específico:
console.log(todosJSON[1]);

// Converter o formato JSON p/ lista -> chegar resposta do servidor:
const todoList = JSON.parse(todosJSON);
console.log(todoList);



