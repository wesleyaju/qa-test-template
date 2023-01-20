import { el } from './elements';

class ContactsNewCompany {
  checkpoint = () => {
    cy.contains(el.title, 'Nova empresa').should('be.visible');
  }

  fillForm = (company) => {
    cy.get(el.name, { timeout: 15000 }).type(company.name);
    cy.get(el.corporateName).type(company.corporateName);
    cy.contains(el.segmentDiv, 'Segmento').find(el.segmentInput).click().wait(1000).type(company.segment);
    cy.contains(el.originDiv, 'Origem').find(el.originInput).click().wait(1000).type(company.origin).wait(1000).type('{enter}');
    cy.get(el.cnpj).type(company.cnpj);
    cy.get(el.typeTelBtn).last().click();
    cy.contains(el.typeTelItem, 'Comercial').click();
    cy.get(el.tel).type(company.tel);
  }

  fillFormLocation = (company) => {
    cy.contains(el.locationSection, 'Localização').click();
    cy.contains(el.addressDiv, 'Endereço').find(el.addressInput).first().type(company.location.street, { force: true });
    cy.contains(el.complementDiv, 'Complemento').find(el.complementInput).type(company.location.complement);
    cy.contains(el.neighborhoodDiv, 'Bairro').find(el.neighborhoodInput).type(company.location.neighborhood);
    cy.get(el.postalCode).type(`${company.location.postalCode}000`);
    cy.contains(el.cityDiv, 'Cidade').find(el.cityInput).click().wait(1000).type('São Paulo').wait(1500).type('{downArrow}{enter}');
  }

  fillFormOtherInfo = (company) => {
    cy.contains(el.otherInfoSection, 'Outras informações').click();
    cy.get(el.email).type(company.email);
    cy.get(el.website).type(company.website);
    cy.contains(el.relationshipDiv, 'Relação').find(el.relationshipInput).click().wait(1000).type(company.relationship).wait(1000).type('{downArrow}{enter}');
    cy.get(el.obs).type(company.obs);
  }

  editCompany = (company) => {
    cy.get(el.name, { timeout: 15000 }).clear({ force: true }).type(company.name);
    cy.get(el.tel).clear().type(company.tel);
    cy.contains(el.locationSection, 'Localização').click();
    cy.contains(el.addressDiv, 'Endereço').find(el.addressInput).first().clear({ force: true }).type(company.location.street, { force: true });
    cy.contains(el.otherInfoSection, 'Outras informações').click();
    cy.get(el.email).clear().type(company.email);
  }

  toSubmit = () => {
    cy.contains(el.submit, 'Salvar').click();
  }

  findCompany = (company) => {
    cy.contains(el.newCompanyTitle, company.name).should('be.visible');
  }
}

export default new ContactsNewCompany();
