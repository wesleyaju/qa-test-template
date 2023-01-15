import { el } from './elements';

class ContactsNewCompany {
  checkpoint = () => {
    cy.contains(el.title, 'Nova empresa').should('be.visible');
  }

  fillForm = (company) => {
    cy.get(el.name).type(company.name);
    cy.get(el.corporateName).type(company.corporateName);
    cy.contains(el.segmentDiv, 'Segmento').find(el.segmentInput).click().wait(1000).type(company.segment);
    // cy.get(el.origin).click().type(company.origin).wait(1000).type('{enter}');
    // cy.get(el.cnpj).type(company.cnpj);
    // cy.get(el.typeTelBtn).last().click();
    // cy.contains(el.typeTelItem, 'Comercial').click();
    // cy.get(el.tel).type(company.tel);
  }
}

export default new ContactsNewCompany();
