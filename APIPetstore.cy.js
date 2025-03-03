Cypress.on('uncaught:exception', (err, runnable) => 
    {
        return false
    });
    describe('Api test for store order', function()
    {
        it('Validate Store order ID POST ', function() 
        {
            let store=
            {
                "id": 9,
                "petId": 121,
                "quantity": 200,
                "shipDate": "2022-12-13T04:18:03.195+0000",
                "status": "placed",
                "complete": true
              }
            cy.request('POST', 'https://petstore.swagger.io/v2/store/order', store ).then((response)=>
            {
               expect(response.status).equal(200)
               expect(response.body.id).equal(store.id)
               expect(response.body.petId).equal(store.petId)
               expect(response.body.quantity).equal(store.quantity)
               expect(response.body.shipDate).equal(store.shipDate)
               expect(response.body.status).equal(store.status)
               expect(response.body.complete).equal(store.complete)
        })
    })
        it('API test store order ID GET', function()
        {
            cy.request('GET', 'https://petstore.swagger.io/v2/store/order/9').then((response)=>
            {
               expect(response.status).equal(200)
               expect(response.body.id).equal(9)
               expect(response.body.petId).equal(121)
               expect(response.body.quantity).equal(200)
               expect(response.body.shipDate).equal("2022-12-13T04:18:03.195+0000")
               expect(response.body.status).equals("placed")
               expect(response.body.complete).equal(true)
            })
        })
        
        it('API test store order ID DELETE', function() 
        {
            cy.request('DELETE', 'https://petstore.swagger.io/v2/store/order/9').then((response) => 
            {
                expect(response.status).equal(200)
            })
        })
    })