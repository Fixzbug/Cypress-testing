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


require('cypress-xpath');

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('login1', (credentials) => {
    const baseUrl = Cypress.config('baseUrl');

    // console.log(baseUrl);
    // console.log(credentials);

    cy.request({
        method: 'POST',
        url: baseUrl + '/users/login', // baseUrl will automatically include '/users/login'
        body: {
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
        },
    }).then((response) => {
        // Assert the response status
        // console.log(response);
        
        expect(response.status).to.eq(200);
        // console.log(response.body.data.token);


        // Optionally store the token for further requests
        if (response.body.data.token) {
            Cypress.env('authToken', response.body.data.token);
        }

        // Optionally, perform actions after login
        cy.request({
            method: 'GET',
            url: baseUrl + '/users/user-profile', // Example endpoint after login
            headers: { Authorization: `Basic ${Cypress.env('authToken')}` },
        }).then((response) => {
            // console.log(response);
    
            expect(response.status).to.eq(200);
            cy.log('Protected resource accessed successfully!');
        });

        // Log the response for debugging
        cy.log('Login Successful:', response.body);
    });
});


Cypress.Commands.add('login2', (credentials) => {
    const baseUrl = Cypress.config('baseUrl');

    // console.log(baseUrl);
    // console.log(credentials);

    cy.request({
        method: 'POST',
        url: baseUrl + '/users/login', // baseUrl will automatically include '/users/login'
        body: {
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
        },
    }).then((response) => {
        // Assert the response status
        // console.log(response);
        
        expect(response.status).to.eq(200);
        // console.log(response.body.data.token);


        // Optionally store the token for further requests
        if (response.body.data.token) {
            Cypress.env('authToken', response.body.data.token);
        }

        // Log the response for debugging
        cy.log('Login Successful:', response.body);
    });
});


Cypress.Commands.add('checkToken', (token) => {
    console.log(token);
    cy.window().then((window) => {
        // Set the token in localStorage
        window.localStorage.setItem('token', token);
    });

    // Assert the token value in localStorage
    cy.window().its('localStorage.token').should('eq', token);
})


