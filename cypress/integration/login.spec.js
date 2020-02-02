describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('/login')
      cy.url().should('eq', 'https://app.moberries.com/login')
      cy.get('#email').type(Cypress.env('email'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('form > .btn').click()
    })
  })