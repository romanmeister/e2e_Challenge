describe('e2eLoginTest', function() {

    // Positive Test-Case
    it('It renders succesful login', function() {
      cy.visit('/login')
      cy.get('#email').type(Cypress.env('email'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('form > .btn').click()
      cy.url().should('not.include', '/login')
      cy.get(':nth-child(1) > .nav-link').should('exist')
    })


    // Negative Test-Cases
    it('It fails login due to wrong Mailadress', function() {
      const wrongMail = "email@mail.com" 
      cy.visit('/login')
      cy.get('#email').type(wrongMail)
      cy.get('#password').type(Cypress.env('password'))
      cy.get('form > .btn').click()
      cy.url().should('include', '/login')
    })


    it('It fails login due to wrong PW', function() {
      const wrongPW = "WrongPassword" 
      cy.visit('/login')
      cy.get('#email').type(Cypress.env('email'))
      cy.get('#password').type(wrongPW)
      cy.get('form > .btn').click()
      cy.url().should('include', '/login')
    })


    it('It fails login due to empty Mailadress', function() {
      cy.visit('/login')
      cy.get('#password').type(Cypress.env('password'))
      cy.get('form > .btn').should('be.disabled')
    })


    it('It fails login due to empty PW', function() {
      cy.visit('/login')
      cy.get('#email').type(Cypress.env('email'))
      cy.get('form > .btn').should('be.disabled')
    })


    it('It fails login due to password too short', function() {
      const wrongMail = "email@mail.com" 
      cy.visit('/login')
      cy.get('#email').type(Cypress.env('email'))
      cy.get('#password').type("Lteight")
      cy.get('#password').blur()
      cy.get(':nth-child(2) > .invalid-feedback').should('exist')
    })


    it('It fails login due to password too long', function() {
      const wrongMail = "email@mail.com" 
      cy.visit('/login')
      cy.get('#email').type(Cypress.env('email'))
      cy.get('#password').type("1234567890123456789012345678901")
      cy.get('#password').blur()
      cy.get(':nth-child(2) > .invalid-feedback').should('exist')
    })

  })