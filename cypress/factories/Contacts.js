import data from '../utils/mockData';

const companyName = data.company();

const contacts = {
  company: {
    random: {
      name: companyName,
      corporateName: companyName,
      segment: '{downArrow}{enter}',
      origin: 'Linkedin',
      cnpj: data.cnpj(),
      tel: '99999999999',
      about: data.paragraph(),

      address: {
        postalCode: data.zip({ plusfour: true }),
        street: data.street(),
        number: data.number({ min: 1, max: 10000 }),
        neighborhood: data.state(),
        complement: data.sentence(),
        city: data.city(),
        province: data.state(),
        country: data.country({ full: true }),
      },

      socialNetworks: {
        website: 'https://beta.coodesh.com/',
        linkedin: 'https://www.linkedin.com/company/coodesh/',
        facebook: 'https://facebook.com/coodesh',
        twitter: 'https://twitter.com/coodesh',
        instagram: 'https://www.instagram.com/coodeshbr/',
        github: 'https://github.com/coodesh',
      },

      contact: {
        email: data.email({ domain: 'teste2e.com' }),
        
        whats: '99999999999',
      },

      integration: {
        id: data.id(),
        activity: 'Software{downArrow}{enter}',
      },

      permissions: {
        user: data.email({ domain: 'teste2e.com' }),
        permissionOne: 'Receber notificações{enter}',
        permissionTwo: 'Editar vagas{enter}',
        permissionThree: 'Editar empresa{enter}',
        permissionFour: 'Editar permissões{enter}',
      },
    }
  }
};

export default { contacts };
