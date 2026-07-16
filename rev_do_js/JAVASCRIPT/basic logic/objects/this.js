// This -> Objeto dinâmico

// Exemplo 1:
function greet(){
   console.log("Eu sou", this.name)
 }// se colocar como arrow function dá erro
const person =  {
    name: "Julia",
    greet,
}

person.greet();

// Exemplo 2:
const person = {
    names: "Lih",

//ERRO!
    greet(){
        console.log(this.name);
        return{
            upper(){
                 console.log(this.names.toUpperCase())
                } // função upper não acessa name = ERRO!
    }
},
// CERTO! Upper consegue acessar a propriedade no mesmo lugar que o console.log
    greet(){
        console.log(this.name);
        const upper = () => {
           console.log(this.names.toUpperCase());
        }
        return {upper}
    }
}
person.greet().upper()

// Exemplo 3 
const person = {
    name: "Lih",
    greet(){
        const chars = this.name.split(" "); //separa as letras por espaço: l i h

// FORMA 1:
        chars.forEach(char =>{ 
            console.log(char, this.name)
        })
// FORMA 2:
        const person2 = {name: "Ana"}
        char.forEach(function(char){
            console.log(char, this.name)
        }, this /*ou {name: "Ju"} p/ criar novo obj ou person2*/ )

    }
}
person.greet()

// Exemplo 4 -> Uso em classes: O this faz instâncias da classe

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Meu nome é", this.name, "e eu tenho", this.age, "anos.")
}
}
const person = new Person("Luisa", 22);
const person2 = new Person("Ofélia", 17);
person.greet();
person2.greet();