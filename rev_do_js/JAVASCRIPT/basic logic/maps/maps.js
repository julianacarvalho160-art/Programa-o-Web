// MAPS - Executa uma função em uma lista e retorna uma nova lista com a função aplicada

// Exemplo 1
const users = {
    Julia: {
        age: 22,
        coins: 100,
    },
    Clara: {
        age: 12,
        coins: 0,
    },
    Amanda:{
        age: 17,
        coins: -30,
    },
}
// Acessar objeto
console.log(users.Amanda)
// Criar objeto
users["Matheus"] = {age: 18, coins: 0}
console.log(users);

// Exemplo 2
// FORMA 1:
const users = new Map();

users.set("Lorena", {age: 22, coins: 100});
users.set("Melissa", {age: 12, coins: 0});
users.set("Olívia", {age: 17, coins: -30});

// FORMA 2: 
const users = new Map([
    ["Lorena", {age: 22, coins: 100},new Date()],
    ["Melissa", {age: 12, coins: 0}, new Date()],
    ["Olívia", {age: 17, coins: -30}, new Date()],
]);


console.log(users.get("Melissa")) //Acessar um usuário específico
console.log(users.delete("Olívia")) //Deletar um usuário específico
console.log(users.size) //Qtde de usuários
users.set("Maria", {age: 18, coins: 0}); //Adicionar usuário
console.log(users.has("Maria")) //esse user existe dentro do map? Sim -> retorna true, não -> retorna false

// FORMA 1
for(const entrie of users.entries()){ //entries: exibir chave:valor
    console.log(entrie)
}
// FORMA 2
for(const [key, value] of users.entries()){ //entries: exibir chave:valor
    console.log("A chave é : ", key)
    console.log("O valor é: ", value)
}
// FORMA 3 -> Chaves: for (const key of users.keys()){}
// FORMA 4 -> Valor: for (const {age, coins} of users.values()) => console.log(age, coins)
// FORMA 4 -> Desestruturação for (const [keys, {age, coins}] of users.values()) => console.log(age, coins)


users.forEach(value => {
   console.log(value.getDate()) //.métodos
});

// Exemplo 3: 
//DESAFIO:  MULT todos os num *2
const numbers = [1, 2, 3, 4, 5]

const numberMultipliedByTwo = numbers.map(function(number){
     return number * 2
 })
 console.log(numbers)
 console.log(numberMultipliedByTwo)


// FILTER- Filtra uma lista e a retorna em uma nova lista
// DESAFIO: Retornar uma nova lista só que apenas com números pares

const ages = [8, 13, 27, 30, 22, 40];
const evenAges = ages.filter(function(age){
    return age % 2 === 0;  
});
console.log(ages);
console.log(evenAges);

// REDUCE: 
// DESAFIO:Somar todas as idades - Reduzir todos os valores para 1 só;
//age -> item da lista
// accumulator -> valor atual da u´ltima soma
//0 -> o valor inicial da soma é 0;
// adiciona  accuulator + age -> 0 + 8 = 8
// 8 + 13 = 21
const sumOfAges = ages.reduce(function(age, accumulator){
   return accumulator + age;
}, 0);
console.log(sumOfAges);