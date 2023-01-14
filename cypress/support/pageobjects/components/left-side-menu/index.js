import { el } from './elements';

class LeftSideMenu {
  haveLogo = () => {
    cy.get(el.logoImg, { timeout: 10000 }).should('be.visible')
  };
}

export default new LeftSideMenu();
