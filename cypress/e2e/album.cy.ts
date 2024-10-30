describe('Test Albums page', () => {
  it('should check that there are 8 albums', () => {
    cy.visit('/')
    cy.contains('Música (Curso)')
    cy.wait(500)

    cy.get('app-album-list')

    cy.get('.card .card-body').should('have.length.gt', 5)
  })

  it('should check that I can access the detail', () => {
    cy.visit('/')
    cy.wait(500)

    cy.get('.card .card-body').first()
      .get('button').contains('Ver').click()
    
    cy.get('.list-group .list-group-item').should('have.length.gt', 5)
  })
})
