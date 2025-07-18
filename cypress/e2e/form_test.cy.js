describe('Local Form Test', () => {
  it('fills out and submits the form', () => {
    cy.visit('http://127.0.0.1:8081/form.html') // ✅ Port 8081 not 8080
    cy.get('#name').type('Meskerem')
    cy.get('#email').type('meskerem@example.com')
    cy.get('button[type="submit"]').click()
  })
})
