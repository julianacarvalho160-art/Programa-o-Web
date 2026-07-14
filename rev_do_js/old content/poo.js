// POO

// class Person{
//     constructor(firstName, LastName, age){
//         this.firstName = firstName;
//         this.LastName = LastName;
//         this.age = age;
//     }


    
//     //Métodos Estáticos -> Precisam passar nome, idade, enfim.
//     getFullName(){
//         console.log(`${this.firstName} ${this.LastName}`);
//     };
    
//     // Métodos não estáticos -> Não precisam passar o nome, a idade 
//   static speak(){
//         console.log("Hello World!");
//     }

// }

// const person = new Person("Jane", "Doe", 40);
// console.log(person);
// person.getFullName();
// Person.speak();



// Herança

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
    // sobrescrever
    speak(){
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal("Simba");
animal.speak();
const dog = new Dog("Bob");
dog.speak();

