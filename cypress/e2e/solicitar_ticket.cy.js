describe('Solicitar ticket', () => {
  it('Flujo completo: registro, filtrado, selección de surtidor, solicitar ticket e ingresar a la fila', () => {
    // 1. Ir a la página de registro
    cy.visit('/');

    // 2. Llenar el formulario
    cy.get('#nombre-usuario').type('Juan Pérez');
    cy.get('#ci-usuario').type('1234567');
    cy.get('#correo-usuario').type('juan@example.com');
    cy.get('#contrasenia-usuario').type('secreta123');

    // 3. Hacer clic en el botón de registro
    cy.get('#registrar-button').click();

    //4. Verificar que se redirige a la página de surtidores
    cy.url().should('include', '/lista_surtidores.html');

     // 5. Filtrar por surtidores disponibles
    cy.get('#opcion-filtrado').select('disponibles');
    cy.get('#button-filtrar').click();

    // 6. Verificar que sólo aparecen surtidores disponibles
    cy.get('label#estado-actual:visible').each(($label) => {
        expect($label).to.have.class('disponible');
    });


  });
});
