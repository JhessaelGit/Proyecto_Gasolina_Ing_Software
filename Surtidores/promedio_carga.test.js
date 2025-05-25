import { calcularPromedioCarga } from './promedio_carga.js';

describe("Cálculo del promedio de carga de gasolina", () => {
  it("Debe calcular 0 cuando no hay autos", () => {
    expect(calcularPromedioCarga(0)).toBe(0);
  });
  it("Debe calcular correctamente para 1 auto", () => {
    expect(calcularPromedioCarga(1)).toBe(45);
  });

});