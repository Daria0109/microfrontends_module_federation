describe('The first e2e test', () => {
	it('Should add an item to the cart', () => {
		cy.visit('http://localhost:8080/');
		cy.get('#showlogin').click();
		cy.get('#loginbtn').click();
		cy.get('#showcart').click();
		cy.get('#clearcart').click();
		cy.get('#addtocart_1').click();
		cy.get('.flex-grow:nth-child(3)').click();
		cy.get('#showcart').click();
		cy.get("#grand_total").should("contain", "$5.99");
	})
})