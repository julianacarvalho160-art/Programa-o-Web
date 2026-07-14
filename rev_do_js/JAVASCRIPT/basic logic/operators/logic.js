// OPERADORES LÓGICOS

// &&  (AND)
// ||  (OR)
// NOT (NÃO)


//********************AND********************* */
console.log("&& E (AND)")
console.log("🍰 e 🍕")

console.table([
    ["🍰","🍕",true],
    ["❌", "🍕",false],
    ["🍰","❌",false],
    ["❌","❌", false],
])

const cake = true
const pizza = true

console.log(cake && pizza)



// *******************OU************************

console.log("|| E (OR)")
console.log("🍰 e 🍕")

console.table([
    ["🍰","🍕",true],
    ["❌", "🍕",true],
    ["🍰","❌",true],
    ["❌","❌", false],
])

const cake = false
const pizza = false

console.log(cake || pizza)

//******************NOT************ */

console.log("! NÃO (NOT)")
console.log("🚪")
const isOpen = false
console.log(!isOpen)


// Exemplo 1
const takeBath = false;
const brushTeeth = false;
const isReady = takeBath && brushTeeth;
console.log(isReady)

// Exemplo 2
const washDishes = false;
const doHomework = false;
const canPlay = washDishes || doHomework;
console.log(canPlay)

// Exemplo 3


