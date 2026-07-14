// Validando formulário

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");
const items = document.querySelector(".items");

submitButton.addEventListener('click', (event) =>{
    event.preventDefault()

    // As var recebem os dados do formula´rio
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // Caso o formula´rio sejaj enviado em branco aparece uma mensagem de erro
    if(nameValue === "" || emailValue === ""){
        errorMessage.textContent = "Please fill out the filds!"
        errorMessage.classList = "error"; //seleciona a customização da mensagem erro do css
        setTimeout(()=>{
             errorMessage.textContent = "";
             errorMessage.classList = "";
        },3000)//tira a mensagem de erro deposi de um tempo
        return;

    }
    const li = document.createElement('li'); // criar tag li
    li.classList = "item"; // colocar a classe de item do li
    li.textContent = `Nome: ${nameValue} <br /> Email: ${emailValue}`; // conteúdo da li
    li.innerHTML= `Nome: ${nameValue} <br /> Email: ${emailValue}`; // conteúdo da li

  items.appendChild(li); //cria na DOM 
})