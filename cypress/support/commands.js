// cypress/support/commands.js
Cypress.Commands.add('waitAppReady', () => {
  cy.get('aside', { timeout: 15000 }).should('be.visible')
  cy.get('.oxd-loading-spinner', { timeout: 10000 }).should('not.exist')
  // overlay sering tetap ada di DOM (kelas --hide). Jangan pakai not.exist.
  cy.get('.oxd-overlay', { timeout: 10000 }).should('not.be.visible')
})

Cypress.Commands.add('loginAPI', (username = Cypress.env('username'), password = Cypress.env('password')) => {
  cy.session([username, password], () => {
    // BODY MINIMAL, tanpa assertion
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(password, { log: false })
    cy.get('button[type="submit"]').click()
  }, { cacheAcrossSpecs: true })

  // Pakai session yang sudah ada, baru assert siap pakai
  cy.visit('/web/index.php/dashboard/index')
  cy.waitAppReady()
})
