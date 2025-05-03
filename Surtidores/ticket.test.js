import {verificarDisponibilidad} from './ticket.js';

describe("Disponibilidad de combustible", () => {
  it("Debe retornar true si hay combustible", () => {
    expect(verificarDisponibilidad("Disponible")).toBe(true);
  });

  it("Debe retornar false si está agotado", () => {
    expect(verificarDisponibilidad("Agotado")).toBe(false);
  });
});
