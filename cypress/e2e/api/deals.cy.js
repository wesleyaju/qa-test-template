import { DealFactory } from '../../factories';

const deal = DealFactory.deals.deal.api

let userId;
describe('must interact with deals', () => {
  before('delete all profile deals ', () => {
    cy.deleteAll('/Deals');
    cy.findAll('/Deals').then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body.value).to.be.empty;
    });
    cy.userSelf().its('body.value[0]').then((user) => userId = user.Id);
  });

  context('create', () => {
    it('deal', () => {
      cy.findAll('/Deals@Stages')
        .its('body.value[0]')
        .then((stage) => {
          cy.create('/Deals?$expand=Stage,Status', {
            'Amount': deal.price,
            'Title': deal.title,
            'StageId': deal.Id,
          });
        })
        .then(({ status, body }) => {
          expect(status).to.equal(200);
          expect(body.value).to.have.length(1);
          expect(body.value[0].Amount).to.equal(deal.price);
          expect(body.value[0].CreatorId).to.equal(userId);
          expect(body.value[0].Title).to.equal(deal.title);
          expect(body.value[0].Stage.Name).to.equal('Primeiros contatos');
          expect(body.value[0].Status.Name).to.equal('Em aberto');
        });
    });
  });

  context('read', () => {
    it('must return 1 deal', () => {
      cy.findAll('/Deals?$orderby=Id+asc').then(({ status, body }) => {
        expect(status).to.equal(200);
        expect(body.value[0].CreatorId).to.equal(userId);
        expect(body.value[0].Title).to.equal(deal.title);
      });
    });
  });

  context('update', () => {
    it('deal', () => {
      cy.findAll('/Deals')
        .its('body.value[0]')
        .then((dealResponse) => {
          cy.update('/Deals', dealResponse.Id, {
            'Title': deal.otherTitle,
          });
        })
        .then((dealUpdated) => {
          expect(dealUpdated.status).to.equal(200);
          expect(dealUpdated.body.value).to.have.length(1);
          expect(dealUpdated.body.value[0].CreatorId).to.equal(userId);
          expect(dealUpdated.body.value[0].Title).to.equal(deal.otherTitle);
        });
    });
  });

  context('delete', () => {
    it('deal', () => {
      cy.findAll('/Deals')
        .its('body.value[0]')
        .then((deal) => {
          cy.delete('/Deals', deal.Id).then(({ status }) => {
            expect(status).to.equal(200);
          });
        });
    });

    after('must return an empty array', () => {
      cy.findAll('/Deals').then(({ status, body }) => {
        expect(status).to.equal(200);
        expect(body.value).to.have.length(0);
      });
    });
  });
});