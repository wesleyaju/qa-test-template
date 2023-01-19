// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import signInPage from '../support/pageobjects/signIn';
import { HorizontalMenu, LeftSideMenu } from '../support/pageobjects/components/';
import { UrlFactory, UserFactory } from '../factories/index'

Cypress.Commands.add(
    'login',
    (
        user = {
            email: UserFactory.users.trial.email,
            password: UserFactory.users.trial.password,
            name: UserFactory.users.trial.name,
        },
        
        { cacheSession = true } = {}
    ) => {
        const login = () => {
            cy.visit(UrlFactory.urls.logins.default.full);
            signInPage.haveLogo();
            signInPage.fillForm(user);
            signInPage.toSubmit();
            HorizontalMenu.haveUsername(user);
            LeftSideMenu.haveLogo();
        };
        
        const validate = () => {
            cy.visit(UrlFactory.urls.summary.full);
            cy.location('pathname', { timeout: 2000 }).should('not.eq', UrlFactory.urls.logins.new.pathname);
        }

        const options = {
            cacheAcrossSpecs: true,
            validate
        };

        if (cacheSession) {
            cy.session(user, login, options);
        } else {
            login();
        }

    },
);
