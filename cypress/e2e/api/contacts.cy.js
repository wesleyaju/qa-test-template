import { ContactFactory } from '../../factories/index';

const company = ContactFactory.contacts.company.random
const person = ContactFactory.contacts.person.api

let userId;
describe('must interact with contacts', () => {
  before('delete all profile contacts ', () => {
    cy.deleteAll('/Contacts');
    cy.findAll('/Contacts').then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body.value).to.be.empty;
    });
    cy.userSelf().its('body.value[0]').then((user) => userId = user.Id);
  });

  context('create', () => {
    it('company', () => {
      cy.create('/Contacts?$expand=Type', {
        'Name': company.name,
        'TypeId': company.TypeId,
      })
        .then(({ status, body }) => {
          expect(status).to.equal(200);
          expect(body.value).to.have.length(1);
          expect(body.value[0].Name).to.equal(company.name);
          expect(body.value[0].CreatorId).to.equal(userId);
          expect(body.value[0].Type).to.have.keys('Id', 'Name');
          expect(body.value[0].Type.Id).to.equal(company.TypeId);
          expect(body.value[0].Type.Name).to.equal('Empresa');
        });
    });

    it('person', () => {
      cy.create('/Contacts?$expand=Type', {
        'Name': person.name,
        'TypeId': person.TypeId,
      })
        .then(({ status, body }) => {
          expect(status).to.equal(200);
          expect(body.value).to.have.length(1);
          expect(body.value[0].Name).to.equal(person.name);
          expect(body.value[0].CreatorId).to.equal(userId);
          expect(body.value[0].Type).to.have.keys('Id', 'Name');
          expect(body.value[0].Type.Id).to.equal(person.TypeId);
          expect(body.value[0].Type.Name).to.equal('Pessoa');
        });
    });
  });

  context('read', () => {
    it('must return 2 contacts (1 company, 1 person)', () => {
      cy.findAll('/Contacts?$expand=Type&$orderby=Id+asc').then(({ status, body }) => {
        expect(status).to.equal(200);
        expect(body.value).to.have.length(2);
        expect(body.value[0].Name).to.equal(company.name);
        expect(body.value[0].CreatorId).to.equal(userId);
        expect(body.value[0].Type.Name).to.equal('Empresa');

        expect(body.value[1].Name).to.equal(person.name);
        expect(body.value[1].CreatorId).to.equal(userId);
        expect(body.value[1].Type.Name).to.equal('Pessoa');
      });
    });
  });

  context('update', () => {
    it('person', () => {
      cy.findAll(`/Contacts?$filter=contains(Name, '${person.name}')`)
        .its('body.value[0]')
        .then((personResponse) => {
          cy.update('/Contacts', personResponse.Id, {
            'Name': person.otherName,
          });
        })
        .then((clientUpdated) => {
          expect(clientUpdated.status).to.equal(200);
          expect(clientUpdated.body.value).to.have.length(1);
          expect(clientUpdated.body.value[0].CreatorId).to.equal(userId);
          expect(clientUpdated.body.value[0].Name).to.equal(person.otherName);
        });
    });
  });

  context('delete', () => {
    it('person', () => {
      cy.findAll(`/Contacts?$filter=contains(Name, '${person.otherName}')`)
        .its('body.value[0]')
        .then((client) => {
          cy.delete('/Contacts', client.Id).then(({ status }) => {
            expect(status).to.equal(200);
          });
        });
    });

    after('must return 1 contact (1 company)', () => {
      cy.findAll('/Contacts').then(({ status, body }) => {
        expect(status).to.equal(200);
        expect(body.value).to.have.length(1);
        expect(body.value[0].CreatorId).to.equal(userId);
        expect(body.value[0].Name).to.equal(company.name);
      });
    });
  });
});