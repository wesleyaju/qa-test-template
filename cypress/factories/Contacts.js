import data from '../utils/mockData';

const companyName = data.company();

const contacts = {
  company: {
    default: {
      name: data.company(),
      tel: '88888888888',
      email: data.email({ domain: 'teste2e.com' }),
      obs: data.sentence(),
      location: {
        street: data.street(),
      },
    },
    random: {
      name: companyName,
      corporateName: companyName,
      segment: '{downArrow}{enter}',
      origin: 'Linkedin',
      cnpj: data.cnpj(),
      tel: '99999999999',
      email: data.email({ domain: 'teste2e.com' }),
      website: 'https://ploomes.com/',
      relationship: 'Parceiro',
      obs: data.paragraph(),
      location: {
        postalCode: data.zip({ plusfour: true }),
        street: data.street(),
        number: data.number({ min: 1, max: 10000 }),
        neighborhood: data.state(),
        complement: data.sentence(),
        city: data.city(),
        province: data.state(),
        country: data.country({ full: true }),
      },
    },
  },
  person: {
    default: {
      name: data.name(),
      email: data.email({ domain: 'teste2e.com' }),
      cpf: data.cpf(),
      obs: data.sentence(),
    },
    random: {
      name: data.name(),
      tel: '99999999999',
      email: data.email({ domain: 'teste2e.com' }),
      role: '{downArrow}{enter}',
      department: '{downArrow}{enter}',
      cpf: data.cpf(),
      birthDate: data.datePast(),
      obs: data.paragraph(),
    },
  }
};

export default { contacts };
