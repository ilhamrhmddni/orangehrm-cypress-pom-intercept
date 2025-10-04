// cypress/pages/LoginPage.js
class LoginPage {
  visit() { cy.visit('/web/index.php/auth/login') }
  username() { return cy.get('input[name="username"]') }
  password() { return cy.get('input[name="password"]') }
  submitBtn() { return cy.get('button[type="submit"]') }
  forgotLink() {
    // pakai matchCase:false dan cari 'Forgot' saja
    return cy.contains('a', 'Forgot', { matchCase: false })
  }
  alert() { return cy.get('.oxd-alert-content') }

  // Cari tombol/ikon toggle jika ada
  toggleCandidates() {
    return cy.get('input[name="password"]')
      .closest('.oxd-input-group')
      .find('button[type="button"], .oxd-icon')
  }

  login(username, password) {
    this.username().clear().type(username)
    this.password().clear().type(password, { log: false })
    this.submitBtn().click()
  }
}
export default new LoginPage()
