// OBJETOS : valores + propriedades

const  person = {
   firstname: 'Felipe',
   lastname: 'Rocha',
   age: '21',
   hobbies: ['Asisitir f1', 'jogar futebol', 'ler'],
   dog: {
     name: "Simba",
     age:4,
   },
};

// const firstName = person.firstname;
// const lastName = person.lastname;
// const age = person.age;
// const hobbies = person.hobbies;

//acessar cada valor
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);

//acessar cada valor - índice 
// const read = person.hobbies[2];
// console.log(read);

// Destructure -> outra forma de acesso a lista de objetso com variáveis

// const {firstname:primeiroNome,lastname, age, hobbies, dog} = person;

// const read = person.hobbies[2];
// console.log(primeiroNome);
// console.log(lastname);
// console.log(age);
// console.log(hobbies);
// console.log(person.dog.name)
// console.log(dog)

// LISTA DE OBJETOS

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

// DESAFIO: Tentar acessar a lista de objetos

const DescriptionOfLastTodo = todos[2].description;
console.log(DescriptionOfLastTodo);
