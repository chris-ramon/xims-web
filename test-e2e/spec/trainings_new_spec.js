var selectDropdownByNumber = function (element, index, milliseconds) {
  element.findElements(by.tagName('option'))
    .then(function (options) {
      options[index].click();
    });
  if (typeof milliseconds != 'undefined') {
    browser.sleep(milliseconds);
  }
};

describe('employees page', function() {
  var signInPage = require('../pages/sign_in_page.js'),
    signOutPage = require('../pages/sign_out_page.js'),
    trainingsNewPage = require('../pages/training/trainings_new_page.js'),
    trainingsDetailPage = require('../pages/training/trainings_detail_page.js');

  it('beforeAll', function() {
    signInPage.signIn();
    browser.waitForAngular();
  });
  describe('when creating new employee', function() {
    it('succeeds', function() {
      trainingsNewPage.get();
      trainingsNewPage.responsibleIdInput.sendKeys('first');
      browser.actions().sendKeys(protractor.Key.TAB).perform();

      selectDropdownByNumber(trainingsNewPage.trainingTypeSelect, 2);
      trainingsNewPage.trainingDateInput.sendKeys('2019-04-27T21:02:29.360Z');
      trainingsNewPage.trainingHoursInput.sendKeys(5);
      trainingsNewPage.trainingTopicInput.sendKeys('some cool topic');

      trainingsNewPage.trainerInput.sendKeys('first');
      browser.actions().sendKeys(protractor.Key.TAB).perform();

      trainingsNewPage.trainedEmployeesList.then(function(rows) {
        for (var i = 0; i < rows.length; ++i) {
          rows[i].findElement(by.input('trainedEmployee.employee')).sendKeys('first');
          browser.actions().sendKeys(protractor.Key.TAB).perform();
        }
      });
      trainingsNewPage.saveButton.click();
      expect(browser.getCurrentUrl()).toMatch(/http:\/\/0.0.0.0:9000\/capacitaciones\/\d+/);
    });
  });
  it('afterAll', function() {
    signOutPage.signOut();
  });
});


