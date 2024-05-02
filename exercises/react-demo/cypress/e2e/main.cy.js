describe('counter app',() => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should default count to 0', () => {
        cy.get('button').contains('count is 0')
    })
    it('should increment count by 1', () => {
        cy.get('button').click()
        cy.get('button').contains('count is 1')
        cy.get('button').click()
        cy.get('button').contains('count is 2')
        cy.get('button').click()
        cy.get('button').contains('count is 3')
        cy.get('button').click()
        cy.get('button').contains('count is 4')
        cy.get('button').click()
        cy.get('button').contains('count is 5')
    })
})