// bibliotecas

// npm/js ->  Pode acessar bibliotecas

// npm install nomebiblioteca

import {intro, outro, text} from "@clack/prompts";
import chalk from "chalk";

console.log(chark.blue.underline.bold("Stained"))

async function main(){
    intro(chalk.green("Bem vindo ao programa"))
    const name = await text ({message :"Qual é o seu nome?"});

    outro(`Olá ${name}`)
}
main()