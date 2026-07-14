// EVENTO

const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const items = document.querySelector(".items");
const body = document.querySelector("body");

submitButton.addEventListener('click', function(event){
    // Evita que a página recaregue por conta do click do botão
    event.preventDefault();

 // exibe no console o nome digitado pleo usuário ao enviar o formulário
    // const nameValue = nameInput.value;
    // console.log(nameValue);


 // Se o usuáario mudar o nome do input em um segundo envio, é captado
    // nameInput.addEventListener("change", function(event){
    //     console.log(event.target.value);

// O formulário exibe uma janela de alerta caso o usuário não preencha os campos
    const nameValue = nameInput.value;
   const emailValue  = emailInput.value;

   if(nameValue === '' || emailInput === ''){
       alert("Please fill out all the fields!");
   }

myForm.style.background = "red";
items.firstElementChild.textContent = nameValue;
items.children[1].textContent = emailValue;

body.style.background = "white";
    });
