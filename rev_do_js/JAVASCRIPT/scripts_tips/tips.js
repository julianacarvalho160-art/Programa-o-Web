// SCRIPTS

// node nomearquivo.js -> Executar arquivos

//1) Criar comando para executar arquivo -> Package.json 

// "main: "src/index.js"
// "scripts": {
//   "start": "node src/index.js"
// }

// Terminal: npm run start

//2) Ocultar informaçõoes sensíveis: Coloque-as dentro do arquivo .env 
// Criar arquivo .env dentro da pasta src, SEMPRE!

// "scripts": {
//   "start": "node --env-file .env src/index.js"
// }

// Arquivo principal: index.js -> Acessar

// console.log(process.env.EMAIL);
// console.log(process.env.PASSWORD);

// 3)Recarregar (reload) do arquivo sempre que alterá-lo

// "scripts": {
//   "start": "node --env-file .env src/index.js"
//   "watch": "node --watch src/index.js"
// }




// YOU NEVER DON'T CAN HEAR ME!
