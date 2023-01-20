import { LeftSideMenu } from '../../support/pageobjects/components';
import { UrlFactory, UserFactory } from '../../factories/index'

describe('sign in', () => {  
  context('when the data is correct', () => {
    it('must login successfully', () => {
      const user = UserFactory.users.trial;
      const options = { cacheSession: false };

      cy.login(user, options);
      cy.visit(UrlFactory.urls.summary.full);
      LeftSideMenu.haveLogo();
    });
  });
});
