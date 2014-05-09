var importSummaryPage = function() {
  this.totalEmployees = by.binding('totalEmployeesImported')
  this.get = function() {
    browser.get('http://0.0.0.0:9000/trabajadores/importar/resumen');
  }
};

module.exports = new importSummaryPage();