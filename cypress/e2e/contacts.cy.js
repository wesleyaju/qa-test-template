import contactsPage from '../support/pageobjects/contacts/table';
import { LeftSideMenu } from '../support/pageobjects/components/';
import { ContactFactory, UrlFactory } from '../factories/index'

describe('must create a contacts', () => {
  beforeEach(() => {
    cy.login()
    cy.visit(UrlFactory.urls.contacts.table.full)
    LeftSideMenu.goContacts()
  });
  context('company', () => {
    it('create by main flow', () => {
      contactsPage.newContact('company');
      contactsPage.createFullCompany(ContactFactory.contacts.company.random);
    });
    it('read table companies', () => {
      contactsPage.findCompanyInTable(ContactFactory.contacts.company.random);
    });
    it('update', () => {
      contactsPage.selectCompanyInTable(ContactFactory.contacts.company.random);
      contactsPage.editCompany(ContactFactory.contacts.company.default);
    });
    it('delete', () => {
      contactsPage.selectCompanyInTable(ContactFactory.contacts.company.default);
      contactsPage.deleteLastCompany();
    });
    it('create by person flow', () => {
      contactsPage.newContact('person');
      contactsPage.createCompanyByPerson(ContactFactory.contacts.company.random);
      cy.visit(UrlFactory.urls.contacts.table.full);
      contactsPage.findCompanyInTable(ContactFactory.contacts.company.random);
      contactsPage.selectCompanyInTable(ContactFactory.contacts.company.random);
      contactsPage.deleteLastCompany();
    });
  });
  context('person', () => {
    it('create', () => {
      contactsPage.newContact('person');
      contactsPage.createFullPerson(ContactFactory.contacts.person.random, ContactFactory.contacts.company.random);
      cy.visit(UrlFactory.urls.contacts.table.full);
      contactsPage.findCompanyInTable(ContactFactory.contacts.company.random);
      contactsPage.selectCompanyInTable(ContactFactory.contacts.company.random);
      contactsPage.deleteLastCompany();
    });
    it('read table people', () => {
      contactsPage.findPersonInTable(ContactFactory.contacts.person.random);
    });
    it('update', () => {
      contactsPage.selectPersonInTable(ContactFactory.contacts.person.random);
      contactsPage.editPerson(ContactFactory.contacts.person.default);
    });
    it('delete', () => {
      contactsPage.selectPersonInTable(ContactFactory.contacts.person.default);
      contactsPage.deleteLastPerson();
    });
  });
});
