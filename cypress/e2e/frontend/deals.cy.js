import dealsPage from '../../support/pageobjects/deals/funnel'
import contactsPage from '../../support/pageobjects/contacts/table'
import data from '../../utils/mockData'
import { LeftSideMenu } from '../../support/pageobjects/components';
import { UrlFactory, ContactFactory, DealFactory } from '../../factories/index';

describe('must create a deals', () => {
  beforeEach(() => {
    cy.login()
    cy.visit(UrlFactory.urls.deals.funnel.full)
    LeftSideMenu.goDeals()
  });
  context('deal', () => {
    before('create product group', () => {
      cy.create('/Products@Groups', {"name": data.name()})
    });
    it('create', () => {
      dealsPage.newDeal();
      dealsPage.createFullDeal(DealFactory.deals.deal.random, ContactFactory.contacts.person.random);
    });
    it('read table deals', () => {
      dealsPage.findDealInTable(DealFactory.deals.deal.random);
    });
    it('update', () => {
      dealsPage.selectDeal(DealFactory.deals.deal.random);
      dealsPage.editDeal(DealFactory.deals.deal.default);
    });
    it('delete', () => {
      dealsPage.selectDeal(DealFactory.deals.deal.default);
      dealsPage.deleteLastDeal(DealFactory.deals.deal.default);
    });
    after('delete company created by person flow', () => {
      cy.visit(UrlFactory.urls.contacts.table.full)
      contactsPage.findPersonInTable(ContactFactory.contacts.person.random);
      contactsPage.selectPersonInTable(ContactFactory.contacts.person.random);
      contactsPage.deleteLastPerson();
    });
  });
});
