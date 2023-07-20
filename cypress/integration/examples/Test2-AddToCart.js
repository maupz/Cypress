/// <reference types = "Cypress" />
describe('Test Assertions', function() {
    it('Second Test: Add to Cart', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      // In cypress Most of DOM objects are found using css class 
      cy.get('.search-keyword').type('ca')
      cy.wait(1000)
      
      // Create an alias for '.products'
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
    })
    // Click on 'Cart' button
    cy.get('.cart-icon > img').click()
    // Click on 'Checkout' button
    cy.contains('PROCEED TO CHECKOUT').click()
    // Click on 'Place Order' button
    cy.get('button').contains('Place Order').click()
    //cy.contains('Place Order').click()
    // Verify the text 'Thank you for your order'
     
})}) 