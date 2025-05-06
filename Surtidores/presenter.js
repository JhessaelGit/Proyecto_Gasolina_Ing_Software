import {actualizarEstadoHorario} from './surtidores.js';
const hoy = new Date();
const horaActual = hoy.getHours();
const estadoHorario = document.getElementById("estado-horario");

function mostrar_horario_Actual() {
    if (actualizarEstadoHorario(horaActual)){
        estadoHorario.textContent = "Actualmente abierto";
    }
    else{
        estadoHorario.textContent = "Actualmente cerrado";
    }
}

// Llamada inicial al cargar la página
mostrar_horario_Actual();

// Verifica el horario cada minuto (60,000 ms)
setInterval(mostrar_horario_Actual(), 60000);

//////////////////////////////////////////////////////

import {generarTicket} from './ticket.js';

const botonTicket = document.getElementById("btn-ticket");

if (botonTicket) {
  botonTicket.addEventListener("click", () => {
    const estado = document.getElementById("estado-actual").textContent;
    
    if (estado === "Agotado") {
      alert("Este surtidor no tiene combustible. Por favor, elige otro.");
      return;
    }

    const datosSurtidor = {
      nombre: "E. S. Aranjuez",
      ubicacion: "Avenida Circunvalacion entre calle Los Olivios",
      estado: estado
    };

    const ticket = generarTicket(datosSurtidor);

    // Guardar el ticket en localStorage
    localStorage.setItem("ticketActual", JSON.stringify(ticket));

    // Redirigir a la página del ticket
    window.location.href = "ticket.html";
  });
}
