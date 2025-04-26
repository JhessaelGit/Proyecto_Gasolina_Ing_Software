import {El_string_no_esta_vacio,verificar_ci} from "./Verificar_campos";

describe("Pruebas para verificar el nombre",() => {
    it("Si el campo del nombre es una cadena vacia deberia retornar false", () => {
        expect(El_string_no_esta_vacio("")).toEqual(false)
    })
    it("Si el campo del nombre esta con nombre deveria devolver true", () => {
        expect(El_string_no_esta_vacio("Jhessael")).toEqual(true)
    })
    it("Si el campo del nombre esta vacio deveria devolver un false", () => {
        expect(El_string_no_esta_vacio()).toEqual(false)
    })
})

describe("Pruebas para verificar el ci",() => {
    it("Si el campo del ci es una cadena vacia deberia retornar false", () => {
        expect(verificar_ci("")).toEqual(false)
    })
    it("Si el campo del ci esta con un valor deveria devolver true", () => {
        expect(verificar_ci("1234")).toEqual(true)
    })
    it("Si el campo del ci esta vacio deveria devolver un false", () => {
        expect(verificar_ci()).toEqual(false)
    })
})