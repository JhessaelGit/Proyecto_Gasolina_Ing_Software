const horarioApertura = 8;  // 8 AM
const horarioCierre = 22;   // 10 PM

function actualizarEstadoHorario(horaActual) {
    return horaActual >= horarioApertura && horaActual < horarioCierre;
}

export {actualizarEstadoHorario};