import verificar_nombre from "./Verificar_campos";

describe("Pruebas para verificar el nombre",() => {
    it("Si el campo del nombre es una cadena vacia deberia retornar false", () => {
        expect(verificar_nombre("")).toEqual(false)
    })
    it("Si el campo del nombre esta con nombre deveria devolver true", () => {
        expect(verificar_nombre("Jhessael")).toEqual(true)
    })
})

