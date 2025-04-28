import {verificar_nombre,verificar_ci, verificar_correo, verificar_contrasenia, verificar_surtidor} from "./Verificar_campos";

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
        expect(verificar_ci("12345678")).toEqual(true)
    })
    it("Si el campo del ci esta vacio deveria devolver un false", () => {
        expect(verificar_ci()).toEqual(false)
    })
    it("Si el campo del ci tiene un dato que no sean numeros deveria devolver un false", () => {
        expect(verificar_ci("1234n234")).toEqual(false)
    })
    it("Si el campo del ci tiene solo numeros deveria devolver un true", () => {
        expect(verificar_ci("12343234")).toEqual(true)
    })
    it("Si el campo del ci tiene menos o mas de 8 digitos deveria devolver un false", () => {
        expect(verificar_ci("12343")).toEqual(false)
    })
})

describe("Pruebas para verificar el correo",() => {
    it("Si el campo del correo es una cadena vacia deberia retornar false", () => {
        expect(verificar_correo("")).toEqual(false)  
    })
    it("Si el campo del correo esta con un valor deveria devolver true", () => {
        expect(verificar_correo("prueba@gmail.com")).toEqual(true)
    })
    it("Si el campo del correo esta vacio deveria devolver un false", () => {
        expect(verificar_correo()).toEqual(false)
    })
    it("Si el campo del correo no incluye un @ deveria retornar un false", () => {
        expect(verificar_correo("pruebagmail.com")).toEqual(false)
    })
})

describe("Pruebas para verificar la contraseña",() => {
    it("Si el campo del contraseña es una cadena vacia deberia retornar false", () => {
        expect(verificar_contrasenia("")).toEqual(false)  
    })
    it("Si el campo del contraseña esta con un valor deveria devolver true", () => {
        expect(verificar_contrasenia("1234j1234h")).toEqual(true)
    })
    it("Si el campo del contraseña esta vacio deveria devolver un false", () => {
        expect(verificar_contrasenia()).toEqual(false)
    })
})

describe("Pruebas para verificar el surtidor",() => {
    it("Si el campo del surtidor es una cadena vacia deberia retornar false", () => {
        expect(verificar_surtidor("")).toEqual(false)
    })
    it("Si el campo del nombre esta con nombre deveria devolver true", () => {
        expect(verificar_surtidor("El Cristo")).toEqual(true)
    })
})
