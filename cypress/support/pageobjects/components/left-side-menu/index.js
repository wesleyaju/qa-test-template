import { el } from './elements';
import contactsPage from '../../contacts/table'; 
import dealsPage from '../../deals/funnel'; 

class LeftSideMenu {
  haveLogo = () => {
    cy.get(el.logoImg, { timeout: 10000 }).should('be.visible')
  };

  goContacts = () => {
    cy.contains(el.entityItem, 'Clientes', { timeout: 15000 }).click()
    contactsPage.checkpoint()
  };

  goDeals = () => {
    cy.contains(el.entityItem, 'Negócios', { timeout: 15000 }).click()
    dealsPage.checkpoint()
  };
}

export default new LeftSideMenu();
