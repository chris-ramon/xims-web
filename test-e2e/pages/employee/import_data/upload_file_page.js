var path = require('path');
var fileToUpload = '../../../fixtures/employees_to_import.xlsx';

var uploadFilePage = function() {
  this.fileInput = element(by.id('empUploadFileInput'));
  this.excelFile = path.resolve(__dirname, fileToUpload);
  this.employeesList = element.all(by.repeater('employee in employees'));
  this.get = function() {
    browser.get('http://0.0.0.0:9000/trabajadores/importar/subir-el-archivo');
  }
};

module.exports = new uploadFilePage();