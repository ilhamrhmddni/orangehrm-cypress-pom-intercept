// cypress/pages/ForgotPasswordPage.js
class ForgotPasswordPage {
  visit() { cy.visit('/web/index.php/auth/requestPasswordResetCode') }
  username() { return cy.get('input[name="username"]') }
  resetBtn() { return cy.contains('button', 'Reset Password') }
  cancelBtn() { return cy.contains('button', 'Cancel') }
  toast() { return cy.get('.oxd-toast') }

  request(username) {
    this.username().clear().type(username)
    // daftarkan di spec, bukan di sini; biar lebih eksplisit
    this.resetBtn().click()
  }
}
export default new ForgotPasswordPage()
