Cypress.Commands.add('login',  function () {
	cy.visit('https://the-internet.herokuapp.com/login')
	cy.get("input[id=username]").type('tomsmith')
		cy.get("input[id=password]").type('SuperSecretPassword!')
		cy.get('.radius').click()
		cy.url().should('contain', 'https://the-internet.herokuapp.com/secure')
})