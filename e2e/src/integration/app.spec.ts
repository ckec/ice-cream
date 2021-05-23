describe('apps', () => {
  beforeEach(() => cy.visit('/'));

  it('should contains ice-cream', () => {
    cy.get('h1').contains('Ice-Cream');
  });
});
