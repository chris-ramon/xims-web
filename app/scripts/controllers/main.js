'use strict';

angular.module('ximsApp')
  .controller('MainCtrl', ['$scope', 'ModuleService', 'UserService', function ($scope, ModuleService, UserService) {
    ModuleService.name = ModuleService.HOME;
    $scope.today = new Date();
    $scope.UserService = UserService;

    //  Report: Accidents/Incidents by category
    var data = [
      {
        key: "Accidentes de tránsito",
        color: "#1f77b4",
        values:
          [
            { x : "Enero", y : 4 }, { x : "Febrero", y : 3 }, { x : "Marzo",   y : 6 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 0}, { x : "Agosto", y : 0}, { x : "Septiembre", y : 0},
            { x : "Octubre", y : 0}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 0},
          ]
      },
      {
        key: "Casiaccidentes",
        color: "#aec7e8",
        values:
          [
            { x : "Enero", y : 4 }, { x : "Febrero", y : 3 }, { x : "Marzo",   y : 6 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 0}, { x : "Agosto", y : 0}, { x : "Septiembre", y : 0},
            { x : "Octubre", y : 0}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 0},
          ]
      },
      {
        key: "Primeros Auxilios",
        color: "#ff7f0e",
        values:
          [
            { x : "Enero", y : 4 }, { x : "Febrero", y : 3 }, { x : "Marzo",   y : 6 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 0}, { x : "Agosto", y : 0}, { x : "Septiembre", y : 0},
            { x : "Octubre", y : 0}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 0},
          ]
      },
      {
        key: "Daño a la propiedad",
        color: "#ffbb78",
        values:
          [
            { x : "Enero", y : 4 }, { x : "Febrero", y : 3 }, { x : "Marzo",   y : 6 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 0}, { x : "Agosto", y : 0}, { x : "Septiembre", y : 0},
            { x : "Octubre", y : 0}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 0},
          ]
      },
      {
        key: "Accidente Leve",
        color: "#2ca02c",
        values:
          [
            { x : "Enero", y : 4 }, { x : "Febrero", y : 3 }, { x : "Marzo",   y : 6 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 3}, { x : "Agosto", y : 2}, { x : "Septiembre", y : 2},
            { x : "Octubre", y : 2}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 0},
          ]
      },
      {
        key: "Accidente Incapacitante",
        color: "#98df8a",
        values:
          [
            { x : "Enero", y : 1 }, { x : "Febrero", y : 3 }, { x : "Marzo",   y : 2 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 1}, { x : "Agosto", y : 1}, { x : "Septiembre", y : 0},
            { x : "Octubre", y : 1}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 1},
          ]
      },
      {
        key: "Accidente Mortal",
        color: "#d62728",
        values:
          [
            { x : "Enero", y : 0 }, { x : "Febrero", y : 0 }, { x : "Marzo",   y : 0 },
            { x : "Abril", y : 0}, { x : "Mayo", y : 0}, { x : "Junio", y : 0},
            { x : "Julio", y : 0}, { x : "Agosto", y : 0}, { x : "Septiembre", y : 0},
            { x : "Octubre", y : 0}, { x : "Noviembre", y : 0}, { x : "Diciembre", y : 0},
          ]
      }
    ];
    var chart;
    nv.addGraph(function() {
      chart = nv.models.multiBarChart()
        .transitionDuration(300)
        .reduceXTicks(false)
        .delay(0);

      chart.tooltip(function(key, x, y, e, graph) {
        return '<h3>' + key + '</h3>' + '<p>' +  y + ' en ' + x + '</p>';
      });

      chart.yAxis
        .axisLabel('Cantidad')
        .axisLabelDistance(40)
        .tickFormat(d3.format(',.0d'));

      d3.select('#accidentsIncidentsReport1 svg').datum(data).call(chart);

      nv.utils.windowResize(chart.update);
      return chart;
    });
    // end Report: Accidents/Incidents by category

    //  Report: Accidents/Incidents by quantity
    var dataPieChart = [
      {
        key: "Accidentes de tránsito",
        color: "#1f77b4",
        y: 4,
        data: "esto es una prueba"
      },
      {
        key: "Casiaccidentes",
        color: "#aec7e8",
        y: 1
      },
      {
        key: "Primeros Auxilios",
        color: "#ff7f0e",
        y: 0
      },
      {
        key: "Daño a la propiedad",
        color: "#ffbb78",
        y: 0
      },
      {
        key: "Accidente Leve",
        color: "#2ca02c",
        y: 2
      },
      {
        key: "Accidente Incapacitante",
        color: "#98df8a",
        y: 1
      },
      {
        key: "Accidente Mortal",
        color: "#d62728",
        y: 0
      }
    ];
    nv.addGraph(function() {
      var width = 500,
        height = 500;

      var chart = nv.models.pieChart()
        .x(function(d) { return d.key + ' - ' + d.y })
        .y(function(d) { return d.y })
        .labelType("percent");

      chart.tooltipContent(function(key, y, e, graph) { return '<h3>' + key + '</h3><p>' +  Math.round(y) + '</p>' });


      d3.select("#accidentsIncidentsReport2 svg")
        .datum(dataPieChart)
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);
      return chart;
    });
    // end Report: Accidents/Incidents by quantity

  }]);