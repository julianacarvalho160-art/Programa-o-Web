// OBJECT -> CONVERT TO JSON
// Converte a lista para um conjunto de strings em formato JSON

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

//Passar para a API, converter para JSON antes -> Envio para o servidor
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//Acessar um caractere específico
console.log(todosJSON[1]);

// Converter o formato JSON p/ lista -> chegar resposta do servidor
const todoList = JSON.parse(todosJSON);
console.log(todoList);

