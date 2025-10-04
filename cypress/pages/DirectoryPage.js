// cypress/pages/DirectoryPage.js
class DirectoryPage {
  header() { return cy.contains('h6', 'Directory') }
  nameInput() { return cy.get('input[placeholder="Type for hints..."]') }
  jobTitleSelect() { return cy.get('.oxd-select-text').first() }
  locationSelect() { return cy.get('.oxd-select-text').eq(1) }
  searchBtn() { return cy.contains('button', 'Search') }
  resetBtn() { return cy.contains('button', 'Reset') }
  cards() { return cy.get('.oxd-grid-3 > div') }
  menuLink() { return cy.get('a.oxd-main-menu-item[href*="viewDirectory"]') }

  searchByName(partial) {
    cy.intercept('GET', '**/api/**/employees*').as('searchEmployees')
    this.nameInput().clear().type(partial)
    this.searchBtn().click()
  }
}
export default new DirectoryPage()
