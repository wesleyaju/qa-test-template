import { el } from './elements';
import newDealPage from './newdeal';
import toast from '../../components/toast'

class DealsFunnel {
  newDeal = () => {
    cy.contains(el.newDealDropdown, 'Novo negócio').click();
  };

  createFullDeal = (deal, contact) => {
    newDealPage.fillForm(deal, contact);
    newDealPage.fillFormOtherInfo(deal);
    newDealPage.toSubmit();
    newDealPage.findDeal(deal);
  };

  findDealInTable = (deal) => {
    cy.contains(el.firstDeal, deal.title).should('be.visible');
  };

  selectDeal = (deal) => {
    cy.contains(el.firstDeal, deal.title).should('be.visible').click();
  };

  editDeal = (deal) => {
    cy.contains(el.optionsBtn, 'Opções').click();
    cy.contains(el.editDealBtn, 'Editar negócio').click();
    newDealPage.editDeal(deal);
    newDealPage.toSubmit();
    newDealPage.findDeal(deal);
  };

  deleteLastDeal = () => {
    cy.contains(el.optionsBtn, 'Opções').click();
    cy.contains(el.editDealBtn, 'Excluir negócio').click();
    cy.contains(el.modalDeleteTitle, 'Confirmação').should('be.visible');
    cy.contains(el.modalDeleteConfirm, 'Confirmar').click();
    toast.shouldHaveText('Negócio');
  };

  checkpoint = () => {
    cy.contains(el.newContactDropdown, 'Novo negócio').should('be.visible');
  };
}

export default new DealsFunnel();
