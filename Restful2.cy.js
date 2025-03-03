Cypress.on('uncaught:exception', (err, runnable) => 
    {
        return false
    });
    describe('API Testing - Restful book site',function()
    {
        it('Validate POST -Create API testing',function()
        {
        let create=
        {
            "username" : "admin",
            "password" : "password123"
        }
        cy.request('post','https://restful-booker.herokuapp.com/auth',create).then((response)=>
        {
           expect(response.status).equal(200)
           expect(response.body.username).equal()
           expect(response.body.password).equal()
        })
    })
        it('Validate GET-Booking IDs API test',function() 
        {
          cy.request('GET','https://restful-booker.herokuapp.com/booking').then((response)=>
          {
             expect(response.status).equal(200)
            // expect(response.body[0].bookingid).equal(1151)
             //expect(response.body[1].bookingid).equal(2)
             //expect(response.body[2].bookingid).equal(3)
             //expect(response.body[3].bookingid).equal(4)
            })
    })
        it("GET Api test Booking ID using NAME",function(){ 
           cy.request('GET','https://restful-booker.herokuapp.com/booking?firstname=Sowbarnya&lastname=Muthusamy').then(function(response)
           {
              expect(response.status).equal(200)
        })
    })
        it("GET Booking using DATE",function(){ 
           cy.request('GET','https://restful-booker.herokuapp.com/booking?checkin=2020-12-01&checkout=2020-12-12').then(function(response)
           {
              expect(response.status).equal(200)
     })
    })
        it('GET API test- Booking', function()
    {
           cy.request('GET', 'https://restful-booker.herokuapp.com/booking/298').then((response)=>
       {
              expect(response.status).equal(200)
              expect(response.body.depositpaid).equal(true)
              expect(response.body.firstname).equal("Nantha")
              expect(response.body.lastname).equal("Gopal")
              expect(response.body.totalprice).equal(325)
              expect(response.body.bookingdates.checkin).equal("2022-12-12")
              expect(response.body.bookingdates.checkout).equal("2022-12-12")
        })
    })
    it('POST - CreatBooking API test', function()
     {
        var user =
        {
           "firstname" : "Nantha",
           "lastname" : "Gopal",
           "totalprice" : 325,
           "depositpaid" : true,
           "bookingdates" : 
           {
           "checkin" : "2022-12-12",
           "checkout" : "2022-12-12"
        },
           "additionalneeds" : "lunch"
        }
           cy.request('POST','https://restful-booker.herokuapp.com/booking', user).then((response)=>
           {
              expect(response.status).to.equal(200)
              expect(response.body.booking.firstname).equal(user.firstname)
              expect(response.body.booking.lastname).equal(user.lastname)
              expect(response.body.booking.totalprice).equal(user.totalprice)
              expect(response.body.booking.depositpaid).equal(user.depositpaid)
              expect(response.body.booking.bookingdates.checkin).to.equal(user.bookingdates.checkin)
              expect(response.body.booking.bookingdates.checkout).to.equal(user.bookingdates.checkout)
              expect(response.body.booking.additionalneeds).to.equal(user.additionalneeds)
        })
    })
    })