/* eslint-disable no-undef */
// index page.
describe('open to the Index page', function() {
  beforeEach(function() {
    cy.visit('/')
  })

  it('Loads the index page in english', () => {
    // Test the page at initial load
    cy.url().should('include', '/')
  })
})
