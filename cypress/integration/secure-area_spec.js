describe('secure page', () => {
	beforeEach(() => {
		cy.visit('https://the-internet.herokuapp.com/login')
		cy.login()
	})

	it('greets with secure area', () => {
		cy.get('[id=flash]').should('have.class', 'flash success').and('have.css', 'background-color', 'rgb(93, 164, 35)').and('have.css', 'border-color', 'rgb(69, 122, 26)').and('have.css', 'color', 'rgb(255, 255, 255)')
		cy.get('[id=flash]').contains('a')
		cy.get('a').should('have.attr', 'href', '#')
		cy.get('[id=content]').should('contain', 'Secure Area').and('contain', 'Welcome to the Secure Area. When you are done click logout below.').and('contain', 'a')
	})
})

describe('HTTP POST /authenticate', function () {
	beforeEach(function () {
		cy.fixture('user').then((user) => {
      this.user = user
    })
	})
	it('redirects to secure area with valid credentials', function () {
		cy.request({
			method: 'POST',
			url: 'https://the-internet.herokuapp.com/authenticate',
			body: {
				username: this.user.username,
				password: this.user.userpassword
			},
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		}).then((response) => {
			expect(response.status).eq(200)
			expect(response.body).contains('Secure Area')
		})
	})

	it('redirects to login page with invalid credentials', function () {
		cy.request({
			method: 'POST',
			url: 'https://the-internet.herokuapp.com/authenticate',
			body: {
				username: 'invalid',
				password: 'invalid'
			},
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		}).then((response) => {
			expect(response.status).eq(200)
			expect(response.body).contains('Login Page')
		})
	})
})