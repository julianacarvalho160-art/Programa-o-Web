// Spread e rest

// ...objeto
// Spread -> Espalha as propriedades de um objeto em um novo objeto, Esse novo objeto pode só "absorver" as propriedades do antigo, bem como alterá-las.

// Rest -> Extrai as propriedades de um objeto e coloca-os em uma nova variável. (não extraídos)

// Exmeplo 1 -> Spread -> "Espalhar"
const player = {
    nickname: "Lih",
    health: 20,
    inventory: {
        items: ["sword", "shield", "bow"],
        potions: [
            {type: "regeneration", duration: 8},
            {type: "defense", duration: 8},
        ]
    },
}

function updatePlayer(player, newProps){ //antigo valor e novo valor
     return {...player, ...newProps} //Player: antiga propiedade e antigo valor, newProps: nova propriedade e novo valor
}
// chamada da função: Lih é substituído por Luci e coins é criado
const updatePlayer = updatePlayer(player, {nickname: "Luci", coins: 0})

// Exemplo 2 -> Spread
const person = {name: "Julia"};
const newPerson = {...person, name: "Nina"};// person(pega o que tem aqui) e substituio name Julia por outro nome
console.log(newPerson)

// Exemplo 3 -> Rest
const positive = [1, 2, 3, 4]
const neagtive = [-1, -2, -3, -4]

const[one, two, ...other] = numbers;//other: Todos os números exceto one e two, já extraídos e o que sobrou entra na variável numbers pelo ...other (outros)
console.log(one, two);
console.log(other);

// Exmeplo 4 -> Rest no player

const {inventory, ...playerInfo} = player; // inventory é extraído e o que sobrou em palyer entra na variável playerInfo
console.log(playerInfo)





