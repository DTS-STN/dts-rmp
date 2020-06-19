/* eslint-disable no-undef */
// 400 error page
describe('400 page functions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visit site while bypassing 4xx authorization, check for 404 error', () => {
    cy.visit('localhost:3000/en/blah/', { failOnStatusCode: false }) // Bypass 4xx authorization
    cy.get('[data-cy=error-text]').should('be.visible', '404')
  })
})
