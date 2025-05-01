import {actualizarEstadoHorario} from './surtidores.js';
describe("Pruebas para verificar el cambio de hora",() => {
    it("Si la hora es antes de las 8am deberia retornar false", () => {
        expect(actualizarEstadoHorario(7)).toEqual(false)
    })
})