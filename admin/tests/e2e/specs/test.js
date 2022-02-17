// https://docs.cypress.io/api/table-of-contents

describe('Admin test', () => {
  it('Connection page', () => {
    cy.visit('/')
    cy.contains('h1', 'Connexion')
    cy.get('input[type=text]').invoke('attr', 'placeholder').should('eq', 'Login')
    cy.get('input[type=password]').invoke('attr', 'placeholder').should('eq', 'Mot de passe')
  })
  it('Go to Home page', () => {
    cy.get('button').click()
    cy.get('nav').should('be.visible')
  })
})
