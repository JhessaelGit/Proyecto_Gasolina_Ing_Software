import {verificar_nombre,verificar_ci} from "./Verificar_campos";

describe("Pruebas para verificar el nombre",() => {
    it("Si el campo del nombre es una cadena vacia deberia retornar false", () => {
        expect(verificar_nombre("")).toEqual(false)
    })
    it("Si el campo del nombre esta con nombre deveria devolver true", () => {
        expect(verificar_nombre("Jhessael")).toEqual(true)
    })
    it("Si el campo del nombre esta vacio deveria devolver un false", () => {
        expect(verificar_nombre()).toEqual(false)
    })
})

describe("Pruebas para verificar el ci",() => {
    it("Si el campo del ci es una cadena vacia deberia retornar false", () => {
        expect(verificar_ci("")).toEqual(false)
    })
    it("Si el campo del ci esta con un valor deveria devolver true", () => {
        expect(verificar_ci("1234")).toEqual(true)
    })
})