describe('employees page', function() {
  var signInPage = require('../pages/sign_in_page.js'),
    signOutPage = require('../pages/sign_out_page.js'),
    employeesPage = require('../pages/employees_page.js'),
    employeesDetailPage = require('../pages/employees_detail_page.js');

  it('beforeAll', function() {
    signInPage.signIn();
    browser.waitForAngular();
  });

  describe('when seeing one employee', function() {
    it('should display the main information', function() {
      employeesPage.get();
      employeesPage.firstEmployeeLink.click();
      var l = employeesDetailPage.mainInformation.length;
      for(var i=0; i<l; i++) {
        expect(employeesDetailPage.mainInformation[i].isPresent()).toBe(true);
      }
    });
    it('should display trainings', function() {
      expect(employeesDetailPage.trainingsList.count()).toBeGreaterThan(0);
    });
  });
  it('afterAll', function() {
    signOutPage.signOut();
  });
});


