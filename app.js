//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayOfFriends = [];

function adicionarAmigo() {
    let temp = document.querySelector("input");
    if(temp.value == 0) {
        alert("Nome inválido!");
        limparCampo();
    } else {
        arrayOfFriends.push(temp.value);
        console.log("Teste");
        console.log(arrayOfFriends);
        limparCampo();
    }
}

function limparCampo() {
    limpar = document.querySelector("input");
    limpar.value = "";
}