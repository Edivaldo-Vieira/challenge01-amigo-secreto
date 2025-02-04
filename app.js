let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo').value.trim(); // Remove espaços extras

    if (input === "") {
        alert("Por favor, insira um nome!"); 
        return;
    }

    amigos.push(input);   
    atualizarLista();  // Atualiza a lista ao adicionar um amigo
    limpaCampo();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function limpaCampo() {
    document.getElementById('amigo').value = "";
}

function sortearAmigo(){
    let tamanhoDaLista = amigos.length; 
    let indiceAleatorio = Math.floor(Math.random() * tamanhoDaLista);
    let nomeSorteado = amigos[indiceAleatorio]; 


    if(amigos.length === 0){
        alert("Sem amigos para sortear, digite os nomes dos seus amigos!"); 
        return; 
    }

    let inserirNome = document.getElementById("resultado"); 
        inserirNome.innerHTML = nomeSorteado;    
}