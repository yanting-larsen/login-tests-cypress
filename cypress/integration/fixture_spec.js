describe('User credentials', () => {
  beforeEach(function () {
    cy.fixture('user').then((user) => {
      this.user = user
    })
  })

  it('has user', function () {
		expect(this.user.username).to.equal('tomsmith')
		expect(this.user.userpassword).to.equal('SuperSecretPassword!')
  })
})