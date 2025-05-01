import {actualizarEstadoHorario} from './surtidores.js';
describe("Pruebas para verificar el cambio de hora",() => {
    it("Si la hora es antes de las 8am deberia retornar false", () => {
        expect(actualizarEstadoHorario(7)).toEqual(false)
    })
    it("Si la hora es 8am deberia retornar true", () => {
        expect(actualizarEstadoHorario(8)).toEqual(true)
    })
    it("Si la hora es entre 8am y 10pm (22pm) deberia retornar true", () => {
        expect(actualizarEstadoHorario(15)).toEqual(true)
    })
    it("Si la hora es 10pm (22pm) deberia retornar false", () => {
        expect(actualizarEstadoHorario(22)).toEqual(false)
    })
    it("Si la hora pasada las 10pm (22pm) deberia retornar false", () => {
        expect(actualizarEstadoHorario(23)).toEqual(false)
    })
})