
describe('Fixtures', () => {

    before(function () { 
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('Fixtures demo', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('this.data.Username')
        cy.get("input[placeholder='Password']").type('this.data.Password')
        cy.get("button[type='submit']").click()

    })
})