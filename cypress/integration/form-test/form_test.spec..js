

describe ('Users App', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    const userNameInput = ()=> cy.get('input[name=username]')
    const userEmailInput = ()=> cy.get('input[name=email]')
    const userPasswordInput = ()=> cy.get('input[name=password]')
    const userTosInput = ()=> cy.get('input[name=tos]')
    const userBtnInput = ()=> cy.get('button[id="btn"]')

    describe('Fill out Inputs',()=>{
        
        it('Input type test',()=>{
            userNameInput()
                .should('have.value','')
                .type('Testing')
                .should('have.value', 'Testing')
            
            userEmailInput()
                .should('have.value', '')
                .type('Testing')
                .should('have.value', 'Testing')

            userPasswordInput()
                .should('have.value', '')
                .type('Testing')
                .should('have.value', 'Testing')

        })


        it('ToS test', () =>{
            userTosInput()
            .check({force:true})
            .should('have.value', true)
            .check({force:false})
            .should('have.value', false)
        })


        it('Submit button test', () =>{
            userNameInput().type('Testing')
            userEmailInput().type('Testing')
            userPasswordInput().type('Testing')
            userPasswordInput().check({force:true})
            userBtnInput().should('not.be.disabled')
        })

    })
    








})