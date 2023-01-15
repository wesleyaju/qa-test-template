// import data from '../utils/mockData';

const users = {
  trial: {
    email: Cypress.env('USER_EMAIL'),
    password: Cypress.env('USER_PASSWORD'),
    name: Cypress.env('USER_NAME'),
  },
};

export default { users };
