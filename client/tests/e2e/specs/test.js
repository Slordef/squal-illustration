// https://docs.cypress.io/api/table-of-contents

import { placeholderCategories, placeholderImages, placeholderSettings } from '@/store/placeholder'

describe('E2E Tests - Fake API', () => {
  it('Visits the app root url', () => {
    cy.server()
    cy.route('GET', '/api/settings', placeholderSettings)
    cy.route('GET', '/api/categories', placeholderCategories)
    cy.route('GET', '/api/images', placeholderImages)
    cy.visit('/')
    cy.contains('span', 'Squal')
  })
  describe('Navigation present all pages', () => {
    it('Home link present', () => { cy.get('nav').get('a[href="/"]').should('be.visible') })
    it('Gallery link present', () => { cy.get('nav').get('a[href="/gallery/0"]').should('be.visible') })
    it('Projects link present', () => { cy.get('nav').get('a[href="/projects"]').should('be.visible') })
    it('Contact link present', () => { cy.get('nav').get('a[href="/contact"]').should('be.visible') })
  })
  describe('Home has placeholder', () => {
    it('Home text', () => { cy.get('.home .text div').invoke('html').should('eq', placeholderSettings.homeText) })
    it('Home image', () => { cy.get('.home .image img').invoke('attr', 'src').should('eq', `/web/images/${placeholderImages.find(i => i.id === placeholderSettings.homeImage).link}`) })
  })
  describe('Gallery present all images', () => {
    it('Going to gallery page', () => {
      cy.get('a[href="/gallery/0"]').click()
      cy.get('h1').contains('Galerie')
    })
    it('Gallery provide all placeholder images', () => {
      cy.get('.gallery_pictures').get('.pictureFrame img').each((elem, index) => {
        console.log(index)
        cy.wrap(elem).should('be.visible')
        cy.wrap(elem).invoke('attr', 'src').should('eq', `/web/images/${placeholderImages[index].link}`)
      })
    })
  })
  describe('Projects present informations', () => {
    it('Going to projects page', () => {
      cy.get('a[href="/projects"]').click()
      cy.get('h1').contains('Projets')
    })
  })
  describe('Contact present form', () => {
    it('Going to contact page', () => {
      cy.get('a[href="/contact"]').click()
      cy.get('h1').contains('Contact')
    })
    it('Should show message sent', () => {
      cy.server()
      cy.route('POST', '/api/contact', { success: true, error: '' })
      cy.get('input#name').type('Mr Tester')
      cy.get('input#email').type('tester@test.com')
      cy.get('textarea#text').type('Test message')
      cy.get('input[type=submit]').click()
      cy.get('.contact_status').get('.success').should('be.visible')
    })
    it('Should show error message on send', () => {
      cy.server()
      cy.route('POST', '/api/contact', { success: false, error: 'No email provided' })
      cy.get('input#name').type('Mr Tester').type('{enter}')
      cy.get('.contact_status').get('.error').should('be.visible')
      cy.get('.contact_status').get('.error').contains('No email provided')
    })
  })
})
