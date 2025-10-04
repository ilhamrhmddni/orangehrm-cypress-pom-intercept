// cypress/e2e/auth/forgot_password.spec.cy.js
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'

describe('Forgot Password - OrangeHRM Demo', () => {
  beforeEach(() => {
    ForgotPasswordPage.visit()
  })

  it('TC-007 Validasi required ketika form kosong', () => {
    ForgotPasswordPage.resetBtn().click()
    cy.get('span.oxd-input-field-error-message').should('be.visible')
  })

  it('TC-008 Request reset password untuk user Admin (stabil, form POST + redirect)', () => {
    // Sinkron lewat GET halaman sukses setelah submit
    cy.intercept('GET', '**/web/index.php/auth/sendPasswordReset').as('sendReset')

    ForgotPasswordPage.username().clear().type('Admin')
    ForgotPasswordPage.resetBtn().click()

    // Redirect ke halaman sukses + ada pesan
    cy.wait('@sendReset', { timeout: 15000 })
    cy.url().should('include', '/auth/sendPasswordReset')
    cy.contains('Reset Password link sent successfully').should('be.visible')
  })

  it('TC-009 Cancel kembali ke halaman login', () => {
    ForgotPasswordPage.cancelBtn().click()
    cy.url().should('include', '/auth/login')
  })
})
