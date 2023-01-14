import signInPage from '../support/pageobjects/signIn';
import { HorizontalMenu, LeftSideMenu } from '../support/pageobjects/components/';
import { UrlFactory, UserFactory } from '../factories/index'

describe('sign in', () => {

  before(() => {
    cy.visit(UrlFactory.urls.login.full);
    signInPage.haveLogo();
  });

  context('when the data is correct', () => {
    it('must login successfully', () => {
      signInPage.fillForm(UserFactory.users.trial);
      signInPage.toSubmit();
      HorizontalMenu.haveUsername(UserFactory.users.trial);
      LeftSideMenu.haveLogo();
    });
  });
});
