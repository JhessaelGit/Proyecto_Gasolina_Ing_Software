import { calcularPromedioCarga } from './promedio_carga.js';

describe("Cálculo del promedio de carga de gasolina", () => {
  it("Debe calcular 0 cuando no hay autos", () => {
    expect(calcularPromedioCarga(0)).toBe(0);
  });

});