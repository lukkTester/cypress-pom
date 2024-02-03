export const verifyUrlIsCorrect = (endpoint: string) => {
    cy.url().should('include', endpoint);
}