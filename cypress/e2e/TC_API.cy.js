const baseUrl = Cypress.config('baseUrl');

describe('API Tests', () => {

  it('TESTCASE:001 LOGIN GET TOKEN - API', () => {
    cy.login1({
      username: 'maker',
      email: 'tester@tester.com',
      password: '123456',
    });

    cy.log('TESTCASE:001 - API successfully!');
  });

  it('TESTCASE:002 USER PROFILE- API', () => {
    cy.login2({
      username: 'maker',
      email: 'tester@tester.com',
      password: '123456',
    });

    // Optionally, perform actions after login
    cy.request({
      method: 'GET',
      url: baseUrl + '/users/user-profile', // Example endpoint after login
      headers: { Authorization: `Basic ${Cypress.env('authToken')}` },
    }).then((response) => {
      expect(response.status).to.eq(200);

      console.log(response);

      cy.log('TESTCASE:002 - API successfully!');
    });
  });


  it('TESTCASE:003 OTP - API', () => {
    cy.login2({
      username: 'maker',
      email: 'tester@tester.com',
      password: '123456',
    });

    // Optionally, perform actions after login
    cy.request({
      method: 'POST',
      url: baseUrl + '/users/otpLogin', // Example endpoint after login
      headers: { Authorization: `Basic ${Cypress.env('authToken')}` },
      body: {
        phone: "0907487359",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      console.log(response.body);

      cy.log('TESTCASE:003 OTP VERIFY - API successfully!');

      // Optionally, perform actions after login
      cy.request({
        method: 'POST',
        url: baseUrl + '/users/verifyOTP', // Example endpoint after login
        headers: { Authorization: `Basic ${Cypress.env('authToken')}` },
        body: {
          phone: response.body.data.phone,
          otp: response.body.data.otp,
          hash: response.body.data.hash
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        console.log(response);
        cy.log('TESTCASE:003 - API successfully!');
      });

    });

  });


  it('TESTCASE:004 PRODUCTS - API', () => {
    cy.login2({
      username: 'maker',
      email: 'tester@tester.com',
      password: '123456',
    });

    // Optionally, perform actions after login
    cy.request({
      method: 'POST',
      url: baseUrl + '/users/otpLogin', // Example endpoint after login
      headers: { Authorization: `Basic ${Cypress.env('authToken')}` },
      body: {
        phone: "0907487359",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      console.log(response.body);
      console.log(response.body.data);

      // Optionally, perform actions after login
      cy.request({
        method: 'GET',
        url: baseUrl + '/api/products', // Example endpoint after login
        headers: { Authorization: `Basic ${Cypress.env('authToken')}` },
      }).then((response) => {
        expect(response.status).to.eq(200);

        console.log(response.body.data);

        response.body.data.forEach(element => {
          console.log(element['_id']);
        });

        cy.log('TESTCASE:004 - PRODUCTS successfully!');
      });

    });

  });

});
