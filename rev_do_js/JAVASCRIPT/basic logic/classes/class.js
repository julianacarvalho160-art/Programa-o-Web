//CLASSES: Uma entidade/molde que pode representar vários objetos:

//Exemplo 1 -> Criação de múltiplos objetos:
const person ={
    name: "Julia",
    age: 22,
    intro(){
        return `Olá! Meu nome é ${this.name}`;
    }
}
console.log(person.name);
console.log(person.intro());

const person2 ={
    name: "Ana Lúcia",
    age: 35,
    intro(){
        return `Olá! Meu nome é ${this.name}`;
    }
}
console.log(person.name);
console.log(person.intro());


//Exemplo 2 -> Usar classe para múltiplos objetos
class Person{
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    intro(){
        return `Meu nome é ${this.name} e tenho ${this.age} anos`;
    }
}

const person = new Person("Amanda", 15);
const person2 = new Person("Iara", 16);

console.log(person.intro());
console.log(person2.intro());

//Exemplo 3 -> Propriedades privadas, getters e setters
class Person{
    #name; 
    #age;
    #money = 0;
    constructor(name, age){
      this.#name = name;
      this.#age = age;
    }
    intro(){
        return `Meu nome é ${this.#name} e tenho ${this.#age} anos`;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getMoney(){
        return this.#money;
    }
    setMoney(value){
        this.#money = value;
    }
    incrementMoney(value){
        this.setMoney(this.#money + value);
    }
}
const person = new Person("Amanda", 15);
person.name = "Luisa"; //Não quero alterar o nome "Amanda".
person.setMoney(100);
person.incrementMoneyt(100);
console.log(person.getMoney());

//Exemplo 4 -> Propriedades estáticas
class Game{
    static games = []; //novos jogos são add aqui
    title;
    time;
    status = "Idle";
    constructor(title, time){
        this.title = title;
        this.time = time;
        Game.games.push(this);
    }
    start(){
        this.status = "progress";
    }
    stop(){
        this.status = "ended";
    }
    delete(){
        Game.games = Game.games.filter(game => game.title !== this.title)
    }
}

const parkour = new Game("Parkour", 20) //instâncias
const puzzle = new Game("Puzzle", 160)

// Acessar a prorpriedades estáticas
console.log(Game.games)
parkour.delete();
console.log(Game.games)



//Exemplo 5 -> Herança:
class Animal{
    constructor(name){
       this.name = name;
    }

    speak(){
        console.log(`${this.name} made some noise!`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    //sobrescrever:
    speak(){
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal("Simba");
animal.speak();
const dog = new Dog("Bob");
dog.speak();






