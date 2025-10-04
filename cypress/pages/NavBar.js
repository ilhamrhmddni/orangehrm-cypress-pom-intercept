// cypress/pages/NavBar.js
class NavBar {
  ensureReady() {
    cy.url().should('include', '/dashboard')
    cy.waitAppReady()
  }
  menuItem(label) {
    return cy.contains('a.oxd-main-menu-item', label, { matchCase: false })
  }
  goTo(label) {
    this.ensureReady()
    this.menuItem(label).scrollIntoView().click({ force: true })
  }
}
export default new NavBar()
