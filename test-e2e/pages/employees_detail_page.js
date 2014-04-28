var employeesDetailPage = function() {
  this.mainInformation = [
    element(by.binding('employee.display_name')),
    element(by.binding('employee.id')),
    element(by.binding('employee.id_number')),
    element(by.binding('employee.age')),
    element(by.binding('employee.workspace')),
    element(by.binding('employee.occupation')),
    element(by.binding('employee.id_number'))
  ];
  this.employeeId = null;
  this.get = function() {
    browser.get('http://0.0.0.0:9000/#/trabajadores/' + this.employeeId);
  }
};

module.exports = new employeesDetailPage();