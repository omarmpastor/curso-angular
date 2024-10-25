describe('Test login page', () => {
    it('should make a valid login and redirect to the main page', () => {
      cy.visit('/login')
      
      cy.get('[formcontrolname="username"]').type('omar')
      cy.get('[formcontrolname="password"]').type('1234')
      
      cy.get('button').contains('Login').click()

      cy.url().should('include', '/album')

      cy.get('#dropdownUser1').click()

      cy.get('a').contains('Desconectar')
    })

    it('should make a invalid login and show error message', () => {
        cy.visit('/login')
        
        cy.get('[formcontrolname="username"]').type('otro')
        cy.get('[formcontrolname="password"]').type('0000')
        
        cy.get('button').contains('Login').click()

        cy.get('.alert').contains('Usuario o contraseña incorrectos')
      })
  })
  