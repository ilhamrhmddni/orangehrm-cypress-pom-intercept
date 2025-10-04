# OrangeHRM Demo E2E - Cypress + POM + Intercept

Automasi fitur Login, Forgot Password, dan menu Dashboard → Directory pada OrangeHRM Demo.
Menggunakan:
- Cypress 13
- Page Object Model (POM)
- `cy.intercept` untuk spy/stub request

## Struktur
```text
cypress/
  e2e/
    auth/
      login.spec.cy.js
      forgot_password.spec.cy.js
    dashboard/
      dashboard_directory.spec.cy.js
  fixtures/
    users.json
  pages/
    LoginPage.js
    ForgotPasswordPage.js
    DashboardPage.js
    DirectoryPage.js
    NavBar.js
  support/
    commands.js
    e2e.js
cypress.config.js
package.json
```

## Menjalankan
1. `npm i`
2. `npx cypress open` atau `npm run test`
3. Base URL: https://opensource-demo.orangehrmlive.com  
   Default credential disetel via `cypress.config.js` (Admin/admin123).

## Catatan Intercept
- Demo endpoint dapat berubah. Pola wildcard dipakai: `**/oauth2/token*`, `**/api/**`, `**/auth/requestPasswordResetCode`, `**/employees*`.
- Beberapa test menggunakan stub minimal agar deterministik.

## Test List (16 Test Cases)
- TC-001 Login sukses
- TC-002 Login gagal (password salah)
- TC-003 Validasi username kosong
- TC-004 Validasi password kosong
- TC-005 Toggle show/hide password
- TC-006 Link Forgot Password
- TC-007 Forgot Password required
- TC-008 Forgot Password stub request
- TC-009 Forgot Password cancel
- TC-010 Dashboard tampil
- TC-011 Navigasi ke Directory
- TC-012 Search by name (spy API)
- TC-013 Filter Job Title (spy API)
- TC-014 Reset filter
- TC-015 Pagination (opsional)
- TC-016 Hard reload keep session

## Tips Penilaian
- Tambah variasi test negatif/edge cases pada login dan directory filter.
- Bila selector UI berubah, update di POM saja, test tetap stabil.
- Gunakan `cy.session` untuk mempercepat suite saat banyak test dashboard/directory.
```
