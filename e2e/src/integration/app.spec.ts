describe('controls', () => {
  beforeEach(() => cy.visit('/'));

  it('should contains wish', () => {
    cy.get('h1').contains('wish');
  });
});
