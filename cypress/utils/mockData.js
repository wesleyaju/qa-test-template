import { faker } from '@faker-js/faker';

const fakerbr = require('faker-br');

faker.setLocale('pt_BR');

function date(dataToFaker, callback) {
  const dateParsed = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  const day = dataToFaker.slice(8, 10);
  const month = dateParsed[dataToFaker.slice(4, 7)];
  const year = dataToFaker.slice(11, 15);

  return callback({ day: `${day}`, month: `${month}`, year: `${year}` });
}

export default {
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  name: () => faker.name.findName(),
  email: (config) => faker.internet.email(undefined, undefined, config.domain),
  password: () => `${faker.internet.password(20, undefined, undefined, 'Aa1$')}`,
  phone: () => faker.phone.phoneNumber(),
  cpf: () => fakerbr.br.cpf(),

  company: () => `${faker.company.companyName()} ${faker.company.companySuffix()}`,
  cnpj: () => fakerbr.br.cnpj(),

  datePast: () =>
    date(`${faker.date.past()}`, (response) => {
      return `${response.day}/${response.month}/${response.year}`;
    }),
  dateFuture: () =>
    date(`${faker.date.future()}`, (response) => {
      return `${response.day}/${response.month}/${response.year}`;
    }),
  yearPast: () =>
    date(`${faker.date.past()}`, (response) => {
      return `${response.year}`;
    }),
  yearFuture: () =>
    date(`${faker.date.future()}`, (response) => {
      return `${response.year}`;
    }),

  id: () => faker.datatype.number({ max: 999999999, min: 100000000 }),
  word: () => faker.lorem.word(),
  sentence: () => faker.lorem.sentence(),
  paragraph: () => faker.lorem.paragraph(),
  string: () => faker.datatype.string(),

  number: (config) => faker.datatype.number({ min: config.min, max: config.max }),

  street: () => faker.address.streetName(),
  zip: () => faker.address.zipCode(),
  state: () => faker.address.state(),
  city: () => faker.address.city(),
  country: () => faker.address.country(),
};

