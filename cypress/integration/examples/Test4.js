/// <reference types = "Cypress" />
describe('Test Assertions', function() {
    it('Mau: Visits Rahul Store', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.get('.search-keyword').type('ca')
      cy.wait(1000)
      cy.get('.product:visible').should('have.length',4)
    })
  })