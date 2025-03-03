
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Writing a script for demo ',()=>{

    it('SIGN IN and Product search',function(){

        cy.visit("https://www.amazon.in/")
        cy.get('#nav-link-accountList').should('be.visible').click('center')
        cy.wait(2000)
        cy.get("#a-page > div.a-section.a-padding-medium.auth-workflow")
        //Email Assertion
        cy.get("#ap_email").should('be.visible')
        cy.get("#ap_email").type("+919524877452")
        // Continue button assertion
        cy.get("#continue").should('be.visible')
        cy.get("#continue").click()
        //Password Assertion
        cy.get("#ap_password").should('be.visible')
        cy.get("#ap_password").type("Nantha@123")
        cy.get("#signInSubmit").click()
        cy.get('#nav-link-accountList-nav-line-1').should('be.visible')
        cy.contains('Hello, Nantha').should('be.visible')

        //Complete the OTP process by manually

        cy.wait(8000)
        cy.get("#twotabsearchtextbox").type("roots organics")
        cy.get('#nav-search-submit-button').click()
        cy.wait(3000)
        cy.go("back")

        //search one more product
        cy.get("#twotabsearchtextbox").type("Apple watches")
        cy.get('#nav-search-submit-button').click()


       
        })
})
