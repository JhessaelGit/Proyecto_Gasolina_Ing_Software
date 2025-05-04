function verificarDisponibilidad(estado) {
    return estado === "Disponible";
}

function generarTicket({nombre, ubicacion}) {
    return {
      nombre,
      ubicacion
    };
}
  

export {verificarDisponibilidad,generarTicket};

  