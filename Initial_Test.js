describe('My first Test', function(){
    it('Visit TestProject LoginPage', function(){
        cy.visit('https://app.testproject.io/')

        cy.get('#username')
        .type('parimalpatil0333@gmail.com')
        .should('have.value', 'parimalpatil0333@gmail.com')

        cy.get('#password')
        .type('Parimal@0333')
        .should('have.value', 'Parimal@0333')

        cy.get('#tp-sign-in')
        .click()
    })
})