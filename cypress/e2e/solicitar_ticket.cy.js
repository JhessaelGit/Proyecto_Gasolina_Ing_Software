describe('Flujo de usuario - Paso 1: Registro', () => {
  it('Registra un nuevo usuario', () => {
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
  });
});
