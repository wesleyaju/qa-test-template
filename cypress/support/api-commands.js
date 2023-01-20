const url = Cypress.config('baseUrlApi');
const headers = {
  'user-key': Cypress.env('USER_KEY'),
};


Cypress.Commands.add('userSelf', () => {
  cy.api({
    method: 'GET',
    url: `${url}/Self`,
    headers,
  });
});

Cypress.Commands.add('create', (path, body) => {
  cy.api({
    method: 'POST',
    url: `${url}${path}`,
    headers,
    body,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('update', (path, id, body) => {
  cy.api({
    method: 'PATCH',
    url: `${url}${path}(${id})`,
    headers,
    body,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('delete', (path, id) => {
  cy.api({
    method: 'DELETE',
    url: `${url}${path}(${id})`,
    headers,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('findAll', (path) => {
  cy.api({
    method: 'GET',
    url: `${url}${path}`,
    headers,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('deleteAll', (path) => {
  cy.findAll(path).its('body.value').then((items) => {
    for (const item of items) {
      cy.delete(path, item.Id);
    }
  });
});
