import { esta_dentro_horario } from './surtidores.js';
import { generarTicket } from './ticket.js';

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
