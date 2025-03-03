Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    describe('DragAndDrop', function(){
    it('DemoDragTesting- image S', function(){
    cy.visit("https://demo.automationtesting.in/Static.html")
    cy.url().should('include','automationtesting')
    cy.get('#angular').should('be.visible')
    cy.get('#angular').drag('#droparea').then((success) => {
    assert.isTrue(success)
    })
    })
    
    it('DemoDragTesting- image AT', function(){
    
    cy.visit("https://demo.automationtesting.in/Static.html")
    cy.url().should('include','automationtesting')
    cy.get('#mongo').should('be.visible')
    cy.get('#mongo').drag('#droparea').then((success) => {
    assert.isTrue(success)
    })
    })
    
    it('DemoDragTesting- image SE', function(){
    
    cy.visit("https://demo.automationtesting.in/Static.html")
    cy.url().should('include','automationtesting')
    cy.get('#node').should('be.visible')
    cy.get('#node').drag('#droparea').then((success) => {
    
    assert.isTrue(success)
    })
})
    })