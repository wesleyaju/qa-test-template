import { el } from './elements';

class HorizontalMenu {
  haveUsername = (user) => {
    cy.get(el.userImg, { timeout: 10000 }).should('have.attr', 'alt').and('equal', user.name)
  };
}

export default new HorizontalMenu();
