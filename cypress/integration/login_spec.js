/// <reference types="cypress" />

describe('login page', () => {

	beforeEach(function () {
		cy.visit('https://the-internet.herokuapp.com/login')

    cy.fixture('user').then((user) => {
      this.user = user
    })
  })
	
	it('greets with login page', () => {
		cy.get('.example').contains('h2', 'Login Page')
		cy.get('.subheader').should('have.text', 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.')
		cy.get('.subheader').should('contain', 'tomsmith').and('contain', 'SuperSecretPassword!')
		cy.get('em').should('have.css', 'font-style', 'italic').and('have.css', 'line-height', '32.2px')
	})
	
	it('greets with userename and password form', () => {
		cy.get('label[for=username]').should('have.text', 'Username')
		cy.get('label[for=password]').should('have.text', 'Password')
		cy.get('input').first().should('have.attr', 'name', 'username').and('have.attr', 'id', 'username')
		cy.get('input').eq(1) .should('have.attr', 'name', 'password').and('have.attr', 'id', 'password')
	})

	it('requires email', () => {
		cy.get('form').contains('Login').click()
		cy.get('.flash.error').should('contain', 'Your username is invalid!')
	})

	it('requires password', () => {
		cy.get("input[id=username]").type('tomsmith')
		cy.get('form').contains('Login').click()
		cy.get('.flash.error').should('contain', 'Your password is invalid!')
	})

	it('requires valid username', function () {
		cy.get("input[id=username]").type('invalid{enter}')
		cy.get("input[id=password]").type(this.user.userpassword)
		cy.get('form').contains('Login').click()
		cy.get('.flash.error').should('contain', 'Your username is invalid!')
	})

	it('requires valid password', function () {
		cy.get("input[id=username]").type(this.user.username)
		cy.get("input[id=password]").type('invalid')
		cy.get('form').contains('Login').click()
		cy.get('.flash.error').should('contain', 'Your password is invalid!')
	})
	
	it('navigates to secure page on sucessessful login', () => {
		cy.login()
	})
})