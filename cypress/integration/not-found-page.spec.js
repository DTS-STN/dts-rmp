/* eslint-disable no-undef */
// 400 error page
describe('400 page functions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visit site while bypassing 4xx authorization, check for 404 error', () => {
    cy.visit('localhost:3000/en/blah/', { failOnStatusCode: false }) // Bypass 4xx authorization
    cy.get('[data-cy=error]').should('be.visible')
    cy.get('[data-cy=error-msg]').should('contain', 'Oops! We couldn\'t find that Web page.')
    cy.get('[data-cy=error-404]').should('contain', 'Error 404')
    cy.get('[data-cy=error-msgfr]').should('contain', 'Oops! Nous ne pouvons trouver cette page Web.')
    cy.get('[data-cy=error-404fr]').should('contain', 'Erreur 404')
    cy.get('[data-cy=homebtn-en]').should('contain', 'Go to the homepage')
    cy.get('[data-cy=homebtn-en] a').should('have.attr', 'href', '/')
    cy.get('[data-cy=homebtn-fr]').should('contain', 'Aller à la page d\'accueil')
    cy.get('[data-cy=homebtn-fr] a').should('have.attr', 'href', '/')
  })
})
