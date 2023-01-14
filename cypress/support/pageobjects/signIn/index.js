import { el } from './elements';

class SignIn {
  fillForm = (user) => {
    cy.get(el.email).clear().type(user.email);
    cy.get(el.password).clear().type(user.password, { log: false });
  };

  haveLogo = () => {
    cy.get(el.logo).should('have.attr', 'src').and('equal', 'images/login/logoalt.png');
  };

  toSubmit = () => {
    cy.get(el.submit).click();
  };
}

export default new SignIn();
