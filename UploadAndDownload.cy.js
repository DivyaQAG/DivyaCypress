Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
    })
   

    describe('Uploading a file via Desktop',()=>{

        it('File Upload Topic -Task1',()=>{

            //Exact Page Visit ' where it has that property '

            cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
            cy.wait(4000)
            // Point out the Automated file
            cy.get('#ember336').scrollIntoView()
            cy.get('#ember336').selectFile("E:\\UploadFilePath\\Vidamuyarchi.jpg")
            cy.get('#ember355').should('be.visible')
            
        }) 

        it.only('FileDownloadDemo',function(){

       cy.downloadFile("https://img.onmanorama.com/content/dam/mm/en/business/autos/images/2020/3/12/golden-rolls-royce-phantom.jpg.transform/schema-16x9/image.jpg",'mydownloads','YellowCAR.jpg')
            
       
       // Sample Testing website URL
       //  cy.visit("http://autopract.com/selenium/download.html")
        //  cy.downloadFile('http://autopract.com/selenium/image.jpeg','mydownloads','fly.jpg')
            
           
            
            })
    })