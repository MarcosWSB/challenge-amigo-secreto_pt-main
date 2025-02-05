//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let temp = document.querySelector("input");
    if(temp.value == "") {
        alert("Por favor, insira um nome.");
        limparCampo();
    } else if((amigos.includes(temp.value))){
        alert("Nome já incluso!");
        limparCampo();
    } else{
        amigos.push(temp.value);
        limparCampo();
        listaAmigos();
    }
}

function limparCampo() {
    let limpar = document.querySelector("input");
    limpar.value = "";
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for( let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultadoSorteio =document.getElementById("resultado");

    if(amigos.length <= 1){
        resultadoSorteio.innerHTML = "Adicione pelo menos dois amigos para o sorteio." 
        return
    }
        let max = amigos.length;
        let sorteadoInd = Math.floor(Math.random()*max);

        resultadoSorteio.innerHTML = `O amigo sorteado foi ${amigos[sorteadoInd]}`
}
