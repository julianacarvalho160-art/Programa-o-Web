// Arrays -> TADs onde se pode armazenar elementos

// Push -> Adiciona item no final do array
// Pop -> Remove item do final do array
// Shift -> Remove item do início do array
// Unshitf -> Adiciona item no início do array
// indexOf -> Procurar itens em um array
// sort -> Ordenar em ordem alfabética
// length -> ver tamanho do array
// Array.isArray -> Verificar se algo é um array mesmo


// Exemplo 1 -> Criando um array
const numbers = [4, 30, 6, 1, 8]
// Acesso a um índice -> 0, 1, 2, 3.
console.log(numbers[0])
// Acesso a todos os elementos do array
console.log(numbers)


// Exemplo 2 -> Adicionando itens em um índice específico
const names = ["Julia", "Carolina", "Amanda", "Melissa"]
names[0] = "Maria"
console.log(names)

//Adicionando no final
names.push("Vera")

//Remover no final
names.pop()

// Salvar o nome que foi removido
const lastName = names.pop()
console.log(lastName)

// Remover o primeiro item e salvá-lo em uma variável
const firstName = names.shift()
console.log(firstName)

// Adicionar um item no começo do array 
names.unshift("Nicole")
console.log(names)

// Exemplo 3 -> LISTA -- GUARDAR VALORES
const list = [1, 2, 3, 4, 5];

// Exemplo 4 -> Completo 
const names = ['Felipe', 'João', 'Julia', 10, false ];

// Acessar elementos pelo indice
const joao = names[1];
console.log(joao);

// Add elementos -- fim da lista
names.push("Pedro")
console.log(names)

// Add elementos -- início da lista 
names.unshift(20)
console.log(names)

// Remover último elemento da lista
names.pop();
names.pop();
names.pop();
console.log(names)

//Mudar o nome da variável 
names[0] = "Fernanda"
console.log(names)

// Procurar elementos na lista - índice
const indexOfFelipe = console.log(names.indexOf("Felipe"));
console.log(names);

//Ordenar em ordem alfabética
const sortedNames = names.sort();
console.log(sortedNames);

// Qtde de elementos 
console.log(names.length);

// Verificando se a lista é uma lista
const nameIsArray = Array.isArray(indexOfFelipe);
console.log(nameIsArray);
