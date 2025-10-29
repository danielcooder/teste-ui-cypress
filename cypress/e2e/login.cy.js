/// <reference types="cypress"/>

context('Funcionalidade Login', ()=>{

    it('Deve fazer login com sucesso' , () =>{
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('teste788@teste.com')
            cy.get('#password').type('teste788@teste.com')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain' , 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, teste')

    } )

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('usuario_inexistente_dasilva') ///user INVALIDO
            cy.get('#password').type('teste788@teste.com') ///senha correta
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-error > li').should('contain', ' não está registrado neste site')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('teste788@teste.com') ///user válido
            cy.get('#password').type('senha_invalida123') /// senha INVALIDA
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain' , 'senha fornecida')
    })

})