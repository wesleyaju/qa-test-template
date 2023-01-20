import { el } from './elements';
import data from '../../../../../utils/mockData'
import toast from '../../../components/toast'

class ContactsNewCompany {
  checkpoint = () => {
    cy.contains(el.title, 'Novo negócio').should('be.visible');
  };

  createContact = (contact) => {
    cy.contains(el.contactDiv, 'Cliente').find(el.contactInput).click().wait(1000).type(contact.name).wait(2000).type('{downArrow}{enter}');
    cy.get(el.modalCreateContactTitle).should('have.text', 'Criar');
    cy.contains(el.modalCreateContactRoleDiv, 'Cargo').find(el.modalCreateContactRoleInput).click().wait(1000).type(contact.role);
    cy.contains(el.modalCreateContactDepartmentDiv, 'Departamento').find(el.modalCreateContactDepartmentInput).click().wait(1000).type(contact.department).wait(1000);
    cy.get(el.modalCreateContactEmail).type(contact.email);
    cy.get(el.modalCreateContactTel).type(contact.tel);
    cy.get(el.modalCreateContactSubmit).click();
    toast.shouldHaveText('Sucesso ao criar Cliente')
  };

  createProducts = () => {
    cy.contains(el.productsDiv, 'Produtos relacionados').find(el.productsInput).click().wait(1000).type(data.word()).wait(2000).type('{enter}');
    cy.contains(el.modalCrateProductGroupDiv, 'Grupo').find(el.modalCrateProductGroupInput).click().wait(1000).type('{downArrow}{enter}');
    cy.get(el.modalCreateProductCode).type(data.number({ min: 1, max: 99999 }));
    cy.get(el.modalCreateProductPrice).type(data.number({ min: 1, max: 99999 }));
    cy.contains(el.modalCreateProductSubmit, 'Salvar').click();
    toast.shouldHaveText('Sucesso ao criar Produtos relacionados')
  };

  fillForm = (deal, contact) => {
    cy.get(el.title, { timeout: 15000 }).type(deal.title);
    cy.get(el.price).type(deal.price);
    this.createContact(contact);
    cy.contains(el.originDiv, 'Origem').find(el.originInput).click().wait(1000).type(deal.origin);
  };

  fillFormOtherInfo = (deal, product) => {
    cy.contains(el.otherInfoSection, 'Outras informações').click();
    cy.contains(el.otherUsersDiv, 'Usuários colaboradores').find(el.otherUsersInput).click().wait(1000).type(deal.otherUsers);
    this.createProducts(product);
  };

  editDeal = (deal) => {
    cy.get(el.title, { timeout: 15000 }).clear({ force: true }).type(deal.title, { force: true });
    cy.get(el.price).clear().type(deal.price);
  }

  toSubmit = () => {
    cy.contains(el.submit, 'Salvar').click();
  }

  findDeal = (deal) => {
    cy.contains(el.newDealTitle, deal.title).should('be.visible');
  }
}

export default new ContactsNewCompany();
