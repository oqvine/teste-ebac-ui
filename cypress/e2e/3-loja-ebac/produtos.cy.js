/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página de um produto', () => {
        produtosPage.visitarProduto('Ajax Full-Zip Sweatshirt')
    });

    it('Deve adicionar um produto no carrinho', () => {
        let qtd = 5
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('XS', 'Black', qtd)

        cy.get('.woocommerce-message').should('contain', qtd +' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar um produto no carrinho buscando na massa de dados', () => {
        cy.fixture('produtos').then(dados => {

            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        })
    });
});