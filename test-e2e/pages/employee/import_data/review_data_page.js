var reviewDataPage = function() {
  this.importButton = element(by.partialButtonText('Importar'));
  this.totalEmployeesImported = element(by.binding('EmployeeImportService.totalImported'));
  this.employeesList = element.all(by.repeater('employee in employees'));
  this.get = function() {
    browser.get('http://0.0.0.0:9000/trabajadores/importar/revisar-los-datos');
  }
};

module.exports = new reviewDataPage();