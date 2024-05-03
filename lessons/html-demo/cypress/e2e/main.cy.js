describe('counter app',() => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should default count to 0', () => {
        cy.get('p').contains('0')
    })
    it('should increment count by 1', () => {
        cy.get('button').click()
        cy.get('p').contains('1')
        cy.get('button').click()
        cy.get('p').contains('2')
        cy.get('button').click()
        cy.get('p').contains('3')
        cy.get('button').click()
        cy.get('p').contains('4')
    })
})