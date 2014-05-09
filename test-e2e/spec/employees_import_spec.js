describe('importing employees', function() {
  var signInPage = require('../pages/sign_in_page.js'),
    signOutPage = require('../pages/sign_out_page.js'),
    employeesUploadFilePage = require('../pages/employee/import_data/upload_file_page.js'),
    employeesReviewDataPage = require('../pages/employee/import_data/review_data_page.js'),
    importSummaryPage = require('../pages/employee/import_data/import_summary_page.js');

  it('beforeAll', function() {
    signInPage.signIn();
    browser.waitForAngular();
  });

  describe('when uploading a excel file', function() {
    it('succeeds', function() {
      employeesUploadFilePage.get();
      employeesUploadFilePage.fileInput.sendKeys(employeesUploadFilePage.excelFile);

      expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9000/trabajadores/importar/revisar-los-datos');
      expect(employeesReviewDataPage.employeesList.count()).toBeGreaterThan(0);
    });
  });

  describe('when importing', function() {
    it('should display the confirmation message', function() {
      employeesUploadFilePage.get();
      employeesUploadFilePage.fileInput.sendKeys(employeesUploadFilePage.excelFile);
      employeesReviewDataPage.importButton.click();
      expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9000/trabajadores/importar/resumen');
      expect(employeesReviewDataPage.totalEmployeesImported.isPresent()).toBe(true);
      expect(employeesReviewDataPage.totalEmployeesImported.getText()).toBeGreaterThan(0);
    });
  });

  it('afterAll', function() {
    signOutPage.signOut();
  });
});

