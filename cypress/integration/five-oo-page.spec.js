/* eslint-disable no-undef */
// 500 error page
describe('500 page functions', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    // this is not yet functioning.
    it(' check for 500 error', ()=> {
        cy.visit('localhost:3000/en/') 
          // do something 
      
    })

})




