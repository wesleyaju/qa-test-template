import { el } from './elements';
import contactsPage from '../../contacts/table'; 

class LeftSideMenu {
  haveLogo = () => {
    cy.get(el.logoImg, { timeout: 10000 }).should('be.visible')
  };

  goContacts = () => {
    cy.contains(el.entityItem, 'Clientes', { timeout: 15000 }).click()
    contactsPage.checkpoint()
  };
}

export default new LeftSideMenu();
