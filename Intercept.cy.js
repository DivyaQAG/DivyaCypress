describe('Intercept response',function(){
    it('Intercept response demo posts',function(){ //posts
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/posts'
        }).as('posts')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.wait('@posts').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
            cy.wait(1000)
        })
    })
    it('Mocking with intercept test',function(){ //static response
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {totalposts:5 }).as('posts')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.wait('@posts')
        cy.wait(1000)
    })
    it('Mocking with intercept test',function(){ //static response with name
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {totalposts:5 ,name: 'sowbarnya' }).as('posts')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.wait('@posts')
        cy.wait(1000)
    })
    it('Mocking with intercept test',function(){ //dynamic response 
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {fixture: 'Interceptposts.json' }).as('posts')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.wait('@posts')
        cy.wait(1000)
    })
    it('Intercept response demo comments',function(){ //comments
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/comments'
        }).as('comments')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
        cy.wait('@comments').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(500)
            cy.wait(1000)
        })
    })
    it('Mocking with intercept test',function(){ //static response with name
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/comments', {totalposts:5 ,name: 'sowbarnya muthusamy' }).as('comments')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
        cy.wait('@comments')
        cy.wait(1000)
    })
    it('Mocking with intercept test',function(){ //dynamic response 
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/comments', {fixture: 'Interceptcomments.json' }).as('comments')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
        cy.wait('@comments')
        cy.wait(1000)
    })
    it('Intercept response demo albums',function(){ //albums
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/albums'
        }).as('albums')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(1) > a').click()
        cy.wait('@albums').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
            cy.wait(1000)
        })
    })
    it('Mocking with intercept test',function(){ //static response with name
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/albums', {totalposts:5 ,name: 'SOW' }).as('albums')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(1) > a').click()
        cy.wait('@albums')
        cy.wait(1000)
    })
    it('Mocking with intercept test',function(){ //dynamic response 
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/albums', {fixture: 'Interceptalbums.json' }).as('albums')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(1) > a').click()
        cy.wait('@albums')
        cy.wait(1000)
    })
    it('Intercept response demo todos',function(){ //todos
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/todos'
        }).as('todos')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(1) > a').click()
        cy.wait('@todos').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(200)
            cy.wait(1000)
        })
    })
    it('Mocking with intercept test',function(){ //static response with name
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/todos', {totalposts:5 ,name: 'SOW' }).as('todos')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(1) > a').click()
        cy.wait('@todos')
        cy.wait(1000)
    })
    it('Mocking with intercept test',function(){ //dynamic response 
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/todos', {fixture: 'Intercepttodos.json' }).as('todos')
        cy.get('body > div > main > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(1) > a').click()
        cy.wait('@todos')
        cy.wait(1000)
    })
})