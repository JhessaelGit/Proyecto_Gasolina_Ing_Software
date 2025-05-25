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

    // 7. Dar click en el primer surtidor disponible
    cy.get('.surtidor').filter(':has(label#estado-actual.disponible)').first().find('button').click();

    // 8. Hacer click en el botón "Solicitar Ticket"
    cy.get('#btn-ticket').click();
    
    // Volver atrás en el navegador para seguir con el flujo
    cy.wait(5000); // espera 5 segundo 
    cy.go('back');
    
    // 9. Guardar la cantidad actual de personas en la fila
    cy.get('#contador-fila').invoke('text').then((textBefore) => {
        
        const filaAntes = parseInt(textBefore);
    
        // 10. Hacer clic en "Ingresar a la fila"
        cy.get('#btn-ingresar-fila').click();
        
        // 11. Verificar que la cantidad en la fila ha incrementado en 1
        cy.get('#contador-fila').should(($contador) => {
            const filaDespues = parseInt($contador.text());
            expect(filaDespues).to.eq(filaAntes + 1);
        });
    });
  });
});
