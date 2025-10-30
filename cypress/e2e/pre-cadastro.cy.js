/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email()) /// aqui eu implementei a biblioteca faker que gera automaticamente emails aleatorios
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName());
        cy.get('#account_last_name').type(faker.person.lastName());

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    ////11:31 - aula 3 - hooks e faker


});