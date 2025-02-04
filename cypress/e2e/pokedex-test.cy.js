/// <reference types="cypress" />

const url = 'http://127.0.0.1:8080'
const fetchApi = 'https://pokeapi.co/api/v2/pokemon/'

describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  describe('Prueba lista de Pokemones', () => {
    it('Genera la lista de pokemones', () => {
      cy.get('#tabla-pokemones').should('be.visible');
      cy.get('#lista-pokemones tr').should('have.length', 20);
      cy.get('#lista-pokemones').should('contain', 'bulbasaur');
      cy.get('#boton-siguiente').should('be.visible');
      cy.get('#boton-anterior').should('not.be.visible');
      cy.get('#boton-siguiente').click();
      cy.get('#lista-pokemones').should('not.contain', 'bulbasaur');
      cy.get('#lista-pokemones tr').should('have.length', 20);
      cy.get('#boton-anterior').should('be.visible');
      cy.get('#boton-anterior').click();
      cy.get('#lista-pokemones').should('contain', 'bulbasaur');
    });

    describe('Prueba búsqueda por nombre', () => {
      it('Busca pokemones por nombre', () => {
        cy.get('#nombre-pokemon').type('bulbasaur');
        cy.get('#boton-buscar-nombre').click();
        cy.get('#info-pokemon').should('be.visible');
        cy.get('.card-title').should('have.text', 'bulbasaur');
        cy.get('#imagen-pokemon').should('have.attr', 'src');
        cy.get('.card-text').should('contain', 'Número: 1');
      });

      it('Prueba dos búsquedas por nombre', () => {
        cy.get('#nombre-pokemon').type('charmander');
        cy.get('#boton-buscar-nombre').click();
        cy.get('#info-pokemon').should('be.visible');
        cy.get('.card-title').should('have.text', 'charmander');
        cy.get('#imagen-pokemon').should('have.attr', 'src');
        cy.get('.card-text').should('contain', 'Número: 4');
        cy.get('#nombre-pokemon').clear().type('ditto');
        cy.get('#boton-buscar-nombre').click();
        cy.get('#info-pokemon').should('be.visible');
        cy.get('.card-title').should('have.text', 'ditto');
        cy.get('#imagen-pokemon').should('have.attr', 'src');
        cy.get('.card-text').should('contain', 'Número: 132');
      });

      describe('Prueba búsqueda por número', () => {
        it('Busca pokemon por número', () => {
          cy.get('#numero-pokemon').type('1');
          cy.get('#boton-buscar-numero').click();
          cy.get('#info-pokemon').should('be.visible');
          cy.get('.card-title').should('have.text', 'bulbasaur');
          cy.get('#imagen-pokemon').should('have.attr', 'src');
          cy.get('.card-text').should('contain', 'Número: 1');
        });

        it('Prueba dos búsquedas por número', () => {
          cy.get('#numero-pokemon').type('4');
          cy.get('#boton-buscar-numero').click();
          cy.get('#info-pokemon').should('be.visible');
          cy.get('.card-title').should('have.text', 'charmander');
          cy.get('#imagen-pokemon').should('have.attr', 'src');
          cy.get('.card-text').should('contain', 'Número: 4');
          cy.get('#numero-pokemon').clear().type('132');
          cy.get('#boton-buscar-numero').click();
          cy.get('#info-pokemon').should('be.visible');
          cy.get('.card-title').should('have.text', 'ditto');
          cy.get('#imagen-pokemon').should('have.attr', 'src');
          cy.get('.card-text').should('contain', 'Número: 132');
        });
      });

    })

  })

})


