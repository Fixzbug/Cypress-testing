describe('template spec', async () => {
  await it('passes', () => {
    cy.visit('https://example.cypress.io')
    // cy.wait(1000); // Delays for 5 seconds
    // cy.get('a[href="/cypress-api"]').invoke('attr', 'href').then((href) => {
    //   cy.log(href); // Logs "/cypress-api"
    // });
    cy.get('a[href="/cypress-api"]').click({ multiple: true });
    
  })
})