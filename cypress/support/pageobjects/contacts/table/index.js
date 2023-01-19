import { el } from './elements';
import newCompanyPage from './newcompany';
import newPersonPage from './newperson';
import toast from '../../components/toast';

class ContactsTable {
  newContact = (contactType) => {
    cy.contains(el.newContactDropdown, 'Novo cliente').click();
    if (contactType === 'company') {
      cy.contains(el.newContact, 'Empresa').click();
      newCompanyPage.checkpoint();
    } else if (contactType === 'person') {
      cy.contains(el.newContact, 'Pessoa').click();
      newPersonPage.checkpoint();
    }
  };

  createFullCompany = (company) => {
    newCompanyPage.fillForm(company);
    newCompanyPage.fillFormLocation(company);
    newCompanyPage.fillFormOtherInfo(company);
    newCompanyPage.toSubmit();
    newCompanyPage.findCompany(company);
  };

  createCompanyByPerson = (company) => {
    newPersonPage.createCompany(company);
    toast.shouldHaveText('Sucesso ao criar Empresa');
  };

  findCompanyInTable = (company) => {
    cy.contains(el.tabCompany, 'Empresas', { timeout: 15000 }).wait(3000).click();
    cy.contains(el.firstCompanyInTable, company.name).should('be.visible');
  };

  findPersonInTable = (person) => {
    cy.contains(el.tabPerson, 'Pessoas', { timeout: 15000 }).wait(3000).click();
    cy.contains(el.firstPersonInTable, person.name).should('be.visible');
  };

  selectCompanyInTable = (company) => {
    cy.contains(el.firstCompanyInTable, company.name).should('be.visible').click();
  };

  selectPersonInTable = (person) => {
    cy.contains(el.firstPersonInTable, person.name).should('be.visible').click();
  };

  editCompany = (company) => {
    cy.contains(el.optionsBtn, 'Opções').click();
    cy.contains(el.editCompanyBtn, 'Editar cliente').click();
    newCompanyPage.editCompany(company);
    newCompanyPage.toSubmit();
    newCompanyPage.findCompany(company);
  };

  deleteLastCompany = () => {
    cy.contains(el.optionsBtn, 'Opções').click();
    cy.contains(el.editCompanyBtn, 'Excluir cliente').click();
    cy.contains(el.modalDeleteTitle, 'Confirmação').should('be.visible');
    cy.contains(el.modalDeleteConfirm, 'Confirmar').click();
    toast.shouldHaveText('Cliente excluído');
  };

  createFullPerson = (person, company) => {
    newPersonPage.fillForm(person, company);
    newPersonPage.fillFormOtherInfo(person);
    newPersonPage.toSubmit();
    newPersonPage.findPerson(person);
  }

  editPerson = (person) => {
    cy.contains(el.optionsBtn, 'Opções').click();
    cy.contains(el.editCompanyBtn, 'Editar cliente').click();
    newPersonPage.editPerson(person);
    newPersonPage.toSubmit();
    newPersonPage.findPerson(person);
  }

  deleteLastPerson = () => {
    cy.contains(el.optionsBtn, 'Opções').click();
    cy.contains(el.editCompanyBtn, 'Excluir cliente').click();
    cy.contains(el.modalDeleteTitle, 'Confirmação').should('be.visible');
    cy.contains(el.modalDeleteConfirm, 'Confirmar').click();
    toast.shouldHaveText('Cliente excluído');
  };

  checkpoint = () => {
    cy.contains(el.newContactDropdown, 'Novo cliente').should('be.visible');
  };
}

export default new ContactsTable();
