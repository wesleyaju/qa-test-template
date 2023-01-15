import { el } from './elements';
import newCompanyPage from './newcompany'

class ContactsTable {
  newContact = (contactType) => {
    cy.contains(el.newContactDropdown, 'Novo cliente').click();
    if (contactType === 'company') {
        cy.contains(el.newContact, 'Empresa').click();
        newCompanyPage.checkpoint();
    } else if (contactType === 'person') {
        cy.contains(el.newContact, 'Pessoa').click();
    }
  };

  createCompany = (company) => {
    newCompanyPage.fillForm(company);
  };

  checkpoint = () => {
    cy.contains(el.newContactDropdown, 'Novo cliente').should('be.visible');
  }
}

export default new ContactsTable();
