export function calcularPromedioCarga(autosEnFila) {
    
  const LITROS_POR_AUTO = 45;
  return Math.max(0, autosEnFila) * LITROS_POR_AUTO;
}