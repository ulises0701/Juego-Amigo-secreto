// Arreglo global para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al arreglo
    listaDeAmigos.push(nombre);

    // Limpiar el campo
    input.value = "";

    // Mostrar la lista actualizada
    mostrarAmigos();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista actual

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultadoElemento = document.getElementById('resultado');

    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    resultadoElemento.innerHTML = ""; // Limpiar resultado anterior

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${nombreSorteado}`;
    resultadoElemento.appendChild(li);
}
