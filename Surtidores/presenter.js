import { esta_dentro_horario } from './surtidores.js';
import { generarTicket } from './ticket.js';
import { incrementarContador, decrementarContador } from './contador.js';

const hoy = new Date();
const horaActual = new Date().getHours();
const estadoHorario = document.getElementById("estado-horario");

function mostrar_horario_Actual() {
    if (esta_dentro_horario(horaActual)) {
        estadoHorario.textContent = "Actualmente abierto";
    } else {
        estadoHorario.textContent = "Actualmente cerrado";
    }
}

mostrar_horario_Actual();
setInterval(mostrar_horario_Actual, 60000);

// BOTÓN DE TICKET
const botonTicket = document.getElementById("btn-ticket");

if (botonTicket) {
  botonTicket.addEventListener("click", () => {
    const estado = document.getElementById("estado-actual").textContent;

    if (estado === "Agotado") {
      alert("Este surtidor no tiene combustible. Por favor, elige otro.");
      return;
    }

    const nombre = document.querySelector("h1").textContent;
    const ubicacion = document.querySelectorAll("p")[1].textContent;

    const ticket = generarTicket({ nombre, ubicacion, estado });

    localStorage.setItem("ticketActual", JSON.stringify(ticket));
    window.location.href = "ticket.html";
  });
}

// CONTADOR DE FILA

const nombreSurtidor = document.querySelector("h1")?.textContent ?? "Surtidor";
const keyContador = `contadorFila-${nombreSurtidor.replace(/\s+/g, '_')}`;

const contadorElemento = document.getElementById("contador-fila");
const btnIngresar = document.getElementById("btn-ingresar-fila");
const btnSalir = document.getElementById("btn-salir-fila");

let contador = parseInt(localStorage.getItem(keyContador)) || 0;
if (contadorElemento) contadorElemento.textContent = contador;

function actualizarContador(valor) {
  if (valor === 1) {
    contador = incrementarContador(contador);
  } else if (valor === -1) {
    contador = decrementarContador(contador);
  }
  if (contadorElemento) contadorElemento.textContent = contador;
  localStorage.setItem(keyContador, contador);
}

btnIngresar?.addEventListener("click", () => actualizarContador(1));
btnSalir?.addEventListener("click", () => actualizarContador(-1));

