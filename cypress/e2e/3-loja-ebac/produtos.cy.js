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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página de um produto', () => {
        
    });

    it('Deve adicionar um produto no carrinho', () => {
        
    });
});