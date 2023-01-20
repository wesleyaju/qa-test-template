import data from '../utils/mockData';

const deals = {
    deal: {
        default: {
            title: data.company(),
            price: data.number({ min: 1000, max: 5000 }),
            contact: data.email({ domain: 'teste2e.com' }),
            origin: 'Facebook',
            otherUsers: '{downArrow}{enter}',
            products: data.word(),
        },
        random: {
            title: data.company(),
            price: data.number({ min: 1000, max: 5000 }),
            contact: data.email({ domain: 'teste2e.com' }),
            origin: 'Site',
            otherUsers: '{downArrow}{enter}',
            products: data.word(),
        },
        api: {
            title: data.word(),
            otherTitle: data.word(),
            price: data.number({ min: 1, max: 1000 }),
        }
    },
};

export default { deals };
