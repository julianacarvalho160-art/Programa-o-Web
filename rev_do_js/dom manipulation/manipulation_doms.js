const items = document.querySelector(".items");
console.log(items);

// remover itens da tela -> todos da classe items
// items.remove();

// remover primeiro item da classe items
// console.log(items.firstElementChild.remove());

// remover último elemento da lista
//  console.log(items.lastElementChild.remove());

// Acessa o item 1 com base na sua posição
// console.log(items.children[1]);

//Acessa e muda o texto do item 1 com base em sua posição
// items.children[1].textContent = "Item Um";

// Muda o texto acessando-o diretamente pelo HTML
// items.lastElementChild.innerHTML = "<h1> Hello world! </h1>"


// Muda a cor do botão
const button = document.querySelector(".btn");
button.style.background = "red";
