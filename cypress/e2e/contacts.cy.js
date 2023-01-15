import contactsPage from '../support/pageobjects/contacts/table';
import { LeftSideMenu } from '../support/pageobjects/components/';
import { ContactFactory } from '../factories/index'

describe('must create a contacts', () => {
  before(() => {
    cy.login();
  });

  context('company', () => {
    before(() => {
      LeftSideMenu.goContacts()
    });
    it('create by main flow', () => {
      contactsPage.newContact('company');
      contactsPage.createCompany(ContactFactory.contacts.company.random);
    });
    it.skip('create by person flow', () => {

    });
  });
});
