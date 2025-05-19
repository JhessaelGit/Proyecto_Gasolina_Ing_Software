import { incrementarContador } from './contador.js';

describe("Lógica del contador de autos en fila", () => {
  it("Debe incrementar en 1", () => {
    expect(incrementarContador(0)).toBe(1);
    expect(incrementarContador(5)).toBe(6);
  });
});