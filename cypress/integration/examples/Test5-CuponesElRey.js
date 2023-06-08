/// <reference types = "Cypress" />
describe('Test Assertions', function() {
    it('Llenar cupones de Compra Almacenes el Rey', function() {
      cy.viewport(1920, 1080)
      // TODO: For each type in the array coupons = [PA231697154,PA231697155,PA231697156,PA231697157,PA231697158,PA231697159,PA231697160,PA231697161] type the coupon number in the input field.
      cy.visit('https://almaceneselrey.com/sorteo/?id=6');
      // In cypress Most of DOM objects are found using css class 
      cy.get('[id="name"]').type('John')
      cy.get('[id="lastname"]').type('Doe')
      cy.get('[id="email"]').type('john@doe.com')
      cy.get('[id="personal_id"]').type('555555')
      cy.get('[id="order_number"]').type('72222')
      cy.get('#phone').type('7777777')
      // Click first option in dropdown menu .form-control
      // Assuming you have a select element with the selector 'select#type_id'
      cy.get('#type_id').select('Cédula persona física')
      cy.get('#coupon_number').type('PA231697154')
      cy.get('#warehouse').select('Pérez Zeledón')
      cy.get('#accept-terms').click()
      
    
})})