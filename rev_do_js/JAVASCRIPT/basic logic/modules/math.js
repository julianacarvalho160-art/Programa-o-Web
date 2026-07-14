// Módulos -> Importa função "sum" do arquivo moduless.js

////Package.json UTILIZANDO -> "type" : "commonjs"

// FORMA 1: Importar c/ variável
const math = require('./primary/moduless')
console.log(math.sum(4, 5))


// FORMA 2: Importar c/ desestruturação, como objeto
const {sum, sub } = require("./primary/moduless")
console.log(sum(4, 5))
console.log(sub(8, 4))



////Package.json UTILIZANDO -> "type" : "module"

// FORMA 1: S/ default
import {sum, sub} from "./primary/moduless.js"

console.log(sum(42, 12))
console.log(sub(6, 5))

// FORMA 2: C/ default

import moduless from "./primary/moduless"

console.log(moduless.sum(6, 5))
console.log(moduless.sub(42, 12))

// FORMA 3: Simples importação para executar algo de outro arquivo

import hello from "./hello.js"