describe('employees page', function() {
  var signInPage = require('../pages/sign_in_page.js'),
    signOutPage = require('../pages/sign_out_page.js'),
    trainingsPage = require('../pages/trainings_page.js');

  it('beforeAll', function() {
    signInPage.signIn();
    browser.waitForAngular();
  });

  it('should list employees', function() {
    trainingsPage.get();
    expect(trainingsPage.trainingsList.count()).toBeGreaterThan(0);
  });
  describe('when search', function() {
    it('should list employees when empty search text', function() {
      trainingsPage.get();
      trainingsPage.searchButton.click();
      expect(trainingsPage.trainingsList.count()).toBeGreaterThan(0);
    });
  });
  describe('when changing of page', function() {
    it('should list employees', function() {
      trainingsPage.get();
      trainingsPage.nextPageButton.click();
      expect(trainingsPage.trainingsList.count()).toBeGreaterThan(0);
    });
  });
  it('afterAll', function() {
    signOutPage.signOut();
  });
});


