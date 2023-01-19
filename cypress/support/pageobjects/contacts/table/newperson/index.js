import { el } from './elements';

class ContactsNewPerson {
    checkpoint = () => {
        cy.contains(el.title, 'Nova pessoa').should('be.visible');
    }

    createCompany = (company) => {
        cy.contains(el.companyDiv, 'Empresa', { timeout: 15000 }).find(el.companyInput).click().wait(1000).type(company.name).wait(1000).type('{downArrow}{enter}');
        cy.get(el.modalCreateCompanyTitle).should('have.text', 'Criar');
        cy.contains(el.modalCreateCompanySegmentDiv, 'Segmento').find(el.modalCreateCompanySegmentInput).click().wait(1000).type(company.segment);
        cy.contains(el.modalCreateCompanyOriginDiv, 'Origem').find(el.modalCreateCompanyOriginInput).click().wait(1000).type(company.origin).wait(1000).type('{downArrow}{enter}');
        cy.get(el.modalCreateCompanyEmail).type(company.email);
        cy.get(el.modalCreateCompanyTel).type(company.tel);
        cy.get(el.modalCreateCompanySubmit).click();
    }

    fillForm = (person, company) => {
        cy.get(el.name, { timeout: 15000 }).type(person.name);
        this.createCompany(company);
        cy.wait(2000);
        cy.get(el.tel).type(person.tel);
        cy.get(el.email).type(person.email);
        cy.contains(el.roleDiv, 'Cargo').find(el.roleInput).click().wait(1000).type(person.role);
        cy.contains(el.departmentDiv, 'Departamento').find(el.departmentInput).click().wait(1000).type(person.department);
    }

    fillFormOtherInfo = (person) => {
        cy.contains(el.otherInfoSection, 'Outras informações').click();
        cy.get(el.cpf).type(person.cpf);
        cy.get(el.birthDate).type(person.birthDate);
        cy.get(el.obs).type(person.obs);
    }

    editPerson = (person) => {
        cy.get(el.name, { timeout: 15000 }).clear().type(person.name);
        cy.get(el.email).clear().type(person.email);
        cy.contains(el.otherInfoSection, 'Outras informações').click();
        cy.get(el.cpf).clear().type(person.cpf);
        cy.get(el.obs).clear().type(person.obs);
    }

    findPerson = (person) => {
        cy.contains(el.newPersonTitle, person.name).should('be.visible');
    }

    toSubmit = () => {
        cy.contains(el.submit, 'Salvar').click();
    }
}

export default new ContactsNewPerson();
