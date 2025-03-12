// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo == ''){
        alert('Por favor, inserte un nombre');
    }else {
        amigos.push(nombreDeAmigo);
        console.log(amigos);
        document.getElementById('amigo').value = '';
        actualizarAmigoLista();
    }
}

function actualizarAmigoLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo()