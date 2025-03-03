Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
    })
describe('mouseactions',()=>
    {  
    it('mouseever',()=>
        {
        cy.visit("https://desicrew.in/")
        cy.get(':nth-child(5) > #servicesDropdown').trigger("mouseover").click()
        cy.get(':nth-child(5) > .dropdown-menu > li > .dropdown-item').should('be.visible')
    })
it('right click',()=>
{
cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
cy.get('.context-menu-one').trigger("contextmenu")
cy.get('.context-menu-icon-paste > span').should("be.visible")
})

it('drag and drop',()=>{

        cy.visit("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-1.html")
        cy.wait(1000)
     //   cy.get('#leftColumn > #box1').drag("#dropBox",{force:true})   
        })
    })