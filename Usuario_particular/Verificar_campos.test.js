import verificar_nombre from "./Verificar_campos";

describe("Pruebas para verificar el nombre",() => {
    it("Si el campo del nombre eesta vacio deberia retornar false", () => {
        expect(verificar_nombre("")).toEqual(false)
    })

})

