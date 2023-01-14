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
        },
    ) => {
        cy.visit(UrlFactory.urls.login.full);
        signInPage.haveLogo();
        signInPage.fillForm(user.trial);
        signInPage.toSubmit();
        HorizontalMenu.haveUsername(user.trial);
        LeftSideMenu.haveLogo();
    },
);
