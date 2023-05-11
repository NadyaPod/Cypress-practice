describe('Restaurant login page', () => {
  it('Page contains Sign-in button', () => {
    cy.visit('/')
    cy.get('button[type="submit"]').should('have.text', 'Войти')
  })
})