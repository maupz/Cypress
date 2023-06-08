/// <reference types = "Cypress" />
describe('Test Assertions', function() {
    it('First Test: Count Visible and Invisible products', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      // In cypress Most of DOM objects are found using css class 
      cy.get('.search-keyword').type('ca')
      cy.wait(1000)
      cy.get('.product').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      // Parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      // Be specific on what you want to click: ADD TO CART of second product
      cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
      // Find 'Cashews' and click on add to cart
      cy.get('.products').find('.product').contains('Cashews').parent().contains('ADD TO CART').click().then(function(){
        console.log('Manually handled console.log to be synchronous 1')
      })
      // Find 'Cashews' and click on add to cart with a loop on each .product 
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        } 
        // Deprecated click when $el.find('button').click()
        })

      // This console log is not part of Cy libs, is asynchronous and appears first
      console.log('HelloMau2')
      cy.get(':nth-child(2) > .product-action > button').click()
      // Manually resolve promises
      const logo = cy.get('.brand').then(function(logo){
        cy.log('Hola mao3') 
      })
      // Create an alias for '.products'
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
        // Deprecated clich whe$el.find('button').click()
    })
    // Assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')
    // Assert the text of the logo
    cy.get('.brand').then(function(logoText){
      cy.log(logoText.text())
    })
    
})})