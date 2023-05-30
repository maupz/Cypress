describe('Test Assertions', () => {
    it('Mau: Visits the Kitchen Sink', () => {
      cy.visit('https://californiadigital.org')
      expect(true).to.equal(true)
    })
  })