describe('template spec', async () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })

  it('Open web', () => {

    // Enter a username
    cy.get('input[name="username"]').type('testuser');

    // Enter a password
    cy.get('input[name="password"]').type('password123');

    // Assert the values entered
    cy.get('input[name="username"]').should('have.value', 'testuser');
    cy.get('input[name="password"]').should('have.value', 'password123');

    cy.get('button[name="save"]').click();

  });


})


