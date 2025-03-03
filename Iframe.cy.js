import 'cypress-iframe'

describe('Handling iframes',function(){
    it.only('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe') //approach 1 bold
        const iframe=cy.get('#mce_0_ifr')
             .its('0.contentDocument.body').should('be.visible')
             .then(cy.wrap)
             iframe.clear().type('Welcome to the testing {ctrl+a}')
             cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)')
             .click()
})
    it('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe') //approach 1 italic
        const iframe=cy.get('#mce_0_ifr')
                .its('0.contentDocument.body').should('be.visible')
                .then(cy.wrap)
                iframe.clear().type('Welcome {ctrl+a}')
                cy.get("[aria-label='Italic']")
                .click()
    })   
    it('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe') //approach 1 center
        const iframe=cy.get('#mce_0_ifr')
             .its('0.contentDocument.body').should('be.visible')
             .then(cy.wrap)
             iframe.clear().type('Welcome {ctrl+a}')
             cy.get("[aria-label='Align center']")
             .click()
})     
    it('Iframes using custom commands',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe') //approach 2 by using custom commands //bold
            cy.getIframe('#mce_0_ifr').then(cy.wrap)
            .type('Software testing {ctrl+a}')
                 cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)')
                 .click()
    })    
    it('Iframes using custom commands',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe') //approach 2 by using custom commands //italic
            cy.getIframe('#mce_0_ifr').then(cy.wrap)
                .type('Software testing {ctrl+a}')
                cy.get("[aria-label='Italic']")
                 .click()    
       })  
    it('Iframes using custom commands',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe') //approach 2 by using custom commands //center
            cy.getIframe('#mce_0_ifr').then(cy.wrap)
               .type('Software testing {ctrl+a}')
                cy.get("[aria-label='Align center']")
                .click()    
        })                             
    it('Iframes using cypress',function(){ //cypress iframes //bold
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr').then(cy.wrap)
        cy.iframe('#mce_0_ifr').clear().type('Rajesh {ctrl+a}')
        cy.get('#content > div > div > div.tox-editor-container > div.tox-editor-header > div.tox-toolbar-overlord > div > div:nth-child(3) > button:nth-child(1)')
        .click()
    })
    it('Iframes using cypress',function(){ //cypress iframes //center
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr').then(cy.wrap)
        cy.iframe('#mce_0_ifr').clear().type('rajesh {ctrl+a}')
        cy.get("[aria-label='Align center']")
        .click()  
})
})