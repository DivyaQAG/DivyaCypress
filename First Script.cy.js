Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
    })

describe(' Test scenario',()=>{

   //Assertion , dropdown selection , input text, Radio buttons, 

    it('Register form with all scenarios',()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')
        //Header 
        cy.wait(4000)
        cy.get('h2').should('be.visible')
        cy.scrollTo(0, 500)
        cy.wait(2000)
        cy.contains('Full Name* ').should('be.visible')
      //  cy.contains('LastName')
        cy.get("input[placeholder='First Name']").type('QaonCloud')
        cy.get("input[placeholder='Last Name']").type('Chennai')
        cy.get('.col-md-8 > .form-control').type('South street, B-Block, chennai600001').should('be.visible')
        cy.get("input[type='email']").type('divya@gmail.com').should('be.visible')
        cy.get("input[type='tel']").type('9629989615')
        cy.get("input[value='FeMale']").click() //Radio button
        cy.get("#checkbox1").click()
        cy.get("#checkbox3").click()
       // cy.get('#msdd').click();
       // cy.wait(2000)
       // cy.contains('Arabic').select()
        ; // dropdown

     //  cy.get("#Skills")
      //  .select("option[value='Backup Management'")
      //Exact dropdown selection 
        cy.get("#Skills").select('Backup Management');
        cy.wait(2000)
        cy.get("#countries").should('be.visible')

        // searched value Not found 

     /*   cy.get('body').then(($body) => {
          if ($body.find('.select2-search__field').length) {
            cy.get('.select2-search__field').type('Bangladesh');
          } else {
            cy.log('Element not found');
          }
        }); */
        
        //forced 
     //   cy.get('.select2-results__option', { timeout: 10000 }).should('be.visible');
     //   cy.get('.select2-results__option').contains('Bangladesh').click();

     // Open the dropdown
cy.get('.select2-selection').click();

// Wait for options to appear and select one
cy.get('.select2-results__option', { timeout: 10000 }) // Adjust the timeout if needed
  .should('be.visible')
  .contains('Bangladesh')
  .click();



        cy.wait(2000)
        cy.get("#yearbox").select('1992')
        cy.wait(2000)
        cy.get("select[placeholder='Month']").select('January')
        cy.wait(2000)
        cy.get('#daybox').select('18')
        cy.get("#firstpassword").type('Divya@123')
        cy.get("#secondpassword").type('Divya@123')
        cy.get("#submitbtn").click()

      })
   
})