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

  it('should show the canada logo', () => {
    cy.get('#canadaImg').should('be.visible')
    cy.get('[data-cy=canada-link] > div > a').should('have.attr', 'href', 'https://www.canada.ca/en.html')
  })

  it('should show the Language toggle link', () => {
    cy.get('[data-cy=lang-tog-fr]').should('be.visible', 'Français')
  })

  it('should show the Home button', () => {
    cy.get('[data-cy=home-button]').should('be.visible')
  })
  it('should have a link to the dashboard page', () => {
    cy.get('[data-cy=dashboard-link]').should('be.visible')
    cy.get('[data-cy=dashboard-link]').click()
    cy.url().should('contain', '/dashboard')
  })

  it('Navbar buttons for search contacts and engagements', () => {
    cy.get('[data-cy=search-nav]').should('be.visible')
  })

  it('Navbar buttons for adding contacts and engagements', () => {
    cy.get('[data-cy=add-nav]').should('be.visible')
  })

  it('should check footer info for links and canada image', () => {
    cy.get('#fLinks > :nth-child(1) > a').should('be.visible').and('contain', 'Social media')
    cy.get('#fLinks > :nth-child(2) > a').should('be.visible').and('contain', 'Mobile applications')
    cy.get(':nth-child(3) > a').should('be.visible').and('contain', 'About Canada.ca')
    cy.get(':nth-child(4) > a').should('contain', 'Terms and conditions')
    cy.get(':nth-child(5) > a').should('contain', 'Privacy')
    cy.get(':nth-child(6) > a').should('contain', 'Digital Technology Solutions')

    cy.get('#fLinks > :nth-child(1) > a').should('have.attr', 'href', 'https://www.canada.ca/en/social.html')
    cy.get('#fLinks > :nth-child(2) > a').should('have.attr', 'href', 'https://www.canada.ca/en/mobile.html')
    cy.get(':nth-child(3) > a').should('have.attr', 'href', 'https://www.canada.ca/en/government/about.html')
    cy.get(':nth-child(4) > a').should('have.attr', 'href', 'https://www.canada.ca/en/transparency/terms.html')
    cy.get(':nth-child(5) > a').should('have.attr', 'href', 'https://www.canada.ca/en/transparency/privacy.html')
    cy.get(':nth-child(6) > a').should('have.attr', 'href', 'https://home.dts-stn.com/')
    cy.get('#footer-img').should('be.visible')
  })
})
