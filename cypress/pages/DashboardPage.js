class DashboardPage {
  urlPart() { return '/web/index.php/dashboard/index' }
  welcomeWidget() { return cy.contains('.oxd-text', 'Quick Launch').closest('div') }
  directoryMenu() { return cy.contains('span.oxd-main-menu-item--name', 'Directory') }
}
export default new DashboardPage()
