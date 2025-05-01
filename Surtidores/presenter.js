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