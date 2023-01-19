import { el } from './elements';

class Toast {
  shouldHaveText(expectText) {
    cy.contains(el.toast, expectText, { timeout: 10000 }).should('be.visible')
  }

  mustBeVisible() {
    cy.get(el.toast, { timeout: 10000 }).should('be.visible');
  }
}

export default new Toast();
