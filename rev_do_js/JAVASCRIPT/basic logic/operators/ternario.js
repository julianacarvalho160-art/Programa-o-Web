// OPERADOR TERNÁRIO

// (expressão) ? (se verdadeiro) : (se falso)

// Exemplo 1
const number = 5
console.log((number % 2 === 0) ? "Par" : "Ímpar")

// Exemplo 2
const age = 22
console.log(age >= 18 ? "Maior de idade" : "Menor de idade")

// Exemplo 3
const learnedJs = true
const withRincko = true
console.log(learnedJs && withRincko ? "Aprendeu javascript com o Rincko Dev" : learnedJs ? "Aprendeu javascript" : "Não aprendeu javascript")

// Exemplo 4
const isAdult = false
 console.log(`Cristiano ${isAdult ? "não" : ""} é criança`)

//Exemplo 5
const hours = 8
console.log("Está de", hours >=0 && hours < 6 ? "madrugada" :
    hours >=6 && hours < 12 ? "manhã" :
    hours >= 12 && hours < 18 ? "tarde" :
    "noite"
)