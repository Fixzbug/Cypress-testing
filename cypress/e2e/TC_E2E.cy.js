import { feature } from "./feature/feature";
import { login_feature } from "./feature/login_feature/login_feature";

describe('System login tester', async () => {

  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit(Cypress.config('baseUrl'))
  })


  // it('TESTCASE:001 - OPEN WEB AND LOGIN', () => {

  //   cy.get('input[name="username"]').type('test');
  //   cy.get('input[name="password"]').type('test');
  //   cy.get('input[name="username"]').should('have.value', 'test');
  //   cy.wait(1000);
  //   cy.get('input[name="password"]').should('have.value', 'test');
  //   cy.wait(1000);
  //   cy.get('button[name="save"]').click();

  // });

  it('TESTCASE:002 - ADV OPEN WEB AND LOGIN', () => {
    feature.get_excel_data('Automate tester');
    login_feature.login('Automate tester', 'test', 'test');
  });

  it('TESTCASE:003 - API', () => {
    cy.createUser({
      id: 123,
      name: 'Jane Lane',
    })
  });

})


