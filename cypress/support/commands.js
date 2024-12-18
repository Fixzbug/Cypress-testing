// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('checkToken', (token) => {
    cy.window().its('localStorage.token').should('eq', token)
})

Cypress.Commands.add('createUser', (user) => {
    console.log('Title locator:', "gg");
    // cy.request({
    //     method: 'POST',
    //     url: 'https://www.example.com/tokens',
    //     body: {
    //         email: 'admin_username',
    //         password: 'admin_password',
    //     },
    // }).then((resp) => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://www.example.com/users',
    //         headers: { Authorization: 'Bearer ' + resp.body.token },
    //         body: user,
    //     })
    // })
})