function verificarDisponibilidad(estado) {
    return estado === "Disponible";
}

function generarTicket({nombre, ubicacion, estado}) {
    return {
      nombre,
      ubicacion,
      estado
    };
}
  
  

export {verificarDisponibilidad,generarTicket};

  