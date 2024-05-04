
let nombres = [];

function agregarNombre() {
  let nombre = document.getElementById("ingreso").value;

  if (nombre !== "") {
    nombres.push(nombre);
    document.getElementById("ingreso").value = "";
    actualizarLista();

  } else {
    alert("Por favor ingresa un nombre válido.");
  }
}

function borrarlista(){
    nombres = [];
    actualizarLista();
}

function actualizarLista() {
  let contenedor = document.getElementById("Resultado");
  contenedor.innerHTML = "<h2>RESULTADO</h2>";
  let lista = document.createElement("ul");

  nombres.forEach(function(nombre) { 
    let elementoLista = document.createElement("li");
    elementoLista.textContent = nombre;

    lista.appendChild(elementoLista);
  });
  contenedor.appendChild(lista);

    let btnBorrar= document.getElementById("borrar");
    btnBorrar.addEventListener("click", borrarlista);
}


document.getElementById("ingresar").addEventListener("click", agregarNombre);
