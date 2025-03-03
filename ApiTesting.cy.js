describe('API Testing Demo', function(){

    it('GET- list user', function(){
    cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.data[0].first_name).equal("Michael")
    })
    })
    
    it('GET- SINGLE user', function(){
    cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.data[0].email).equal("michael.lawson@reqres.in")
    })
    })
    
    it('Get-List resource',function(){
    cy.request('GET','https://reqres.in/api/unknown').then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.data[0].name).equal('cerulean')
    expect(response.body.data[0].pantone_value).equal('15-4020')
    })
    })
    
    it('GET- SINGLE RESOURCE user', function(){
    
    cy.request('GET','https://reqres.in/api/unknown/2').then((response)=>{
    expect(response.status).equal(200)
    
    // expect(response.body.data[0].id).equal("2")
    // expect(response.body.data[0].color).equal("#C74375")
    
    })
    })
    
    it('POST-create', function(){
    let user={
    "name": "morpheus",
    "job": "leader"
    }
    cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
    expect(response.status).equal(201)
    expect(response.body.name).equal(user.name)
    expect(response.body.job).equal(user.job)
    })
    
    })
    
    it('PUT-Update user', function(){
    let user={
    "name": "Rajesh",
    "job": "Tester"
    }
    cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.name).equal(user.name)
    expect(response.body.job).equal(user.job)
    })
    
    })
    
    it('PATCH-Update user', function(){
    
    let user={
    "name": "morpheus",
    "job": "zion resident"
    }
    cy.request('PATCH','https://reqres.in/api/users/2',user).then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.name).equal(user.name)
    expect(response.body.job).equal(user.job)
    })
    
    })
    
    it('DELETE-DELETE user', function(){
    
    cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
    expect(response.status).equal(204)
    
    })
    
    })
    
    /*it('POST -REGISTER SUCCESSFUL user', function(){
    let user={
    "email": "eve.holt@reqres.in",
    "password": "pistol"
    }
    cy.request('POST','https://reqres.in/api/register',user).then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.email).equal(user.email)
    expect(response.body.password).equal(user.password)
    
    })
    
    })
    
    it('POST -REGISTER UNSUCCESSFUL user', function(){
    let user={
    "email": "sydney@fife",
    "error": "Missing password"
    }
    cy.request('POST','https://reqres.in/api/register',user).then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.email).equal(user.email)
    expect(response.body.error).equal(user.error)
    })
    
    })
    
    it('POST -LOGIN SUCCESSFUL user', function(){
    let user={
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
    }
    cy.request('POST','https://reqres.in/api/users?page=2',user).then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.email).equal(user.email)
    expect(response.body.password).equal(user.password)
    })
    
    })
    
    it('GET -DELAYED RESPONSE user', function(){
    
    cy.request('GET','https://reqres.in/api/users?delay=3',user).then((response)=>{
    expect(response.status).equal(200)
    
    })
    
    })*/
    
    })