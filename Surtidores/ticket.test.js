import {verificarDisponibilidad,generarTicket} from './ticket.js';

describe("Disponibilidad de combustible", () => {
  it("Debe retornar true si hay combustible", () => {
    expect(verificarDisponibilidad("Disponible")).toBe(true);
  });

  it("Debe retornar false si está agotado", () => {
    expect(verificarDisponibilidad("Agotado")).toBe(false);
  });
});


describe("Generación básica de ticket", () => {
    it("Debe generar un ticket con nombre y ubicación del surtidor", () => {
      const datosSurtidor = {
        nombre: "E. S. Aranjuez",
        ubicacion: "Avenida Circunvalacion entre calle Los Olivios"
      };
  
      const ticket = generarTicket(datosSurtidor);
  
      expect(ticket.nombre).toBe("E. S. Aranjuez");
      expect(ticket.ubicacion).toBe("Avenida Circunvalacion entre calle Los Olivios");
    });
  });
