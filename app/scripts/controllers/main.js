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

      d3.select('#graphicByCategory svg').datum(data).call(chart);

      nv.utils.windowResize(chart.update);
      return chart;
    });
    // end Report: Accidents/Incidents by category

    //  Report: Accidents/Incidents by quantity
    var dataPieChart = [
      {
        key: "Accidentes de tránsito",
        color: "#1f77b4",
        y: 4
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


      d3.select("#graphicByQuantity svg")
        .datum(dataPieChart)
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);
      return chart;
    });
    // end Report: Accidents/Incidents by quantity

    //  Report: Accidents by affected part of human body
    var affectedPart = [
      {
        key: "Cabeza",
        color: "#9edae5",
        y: 4
      },
      {
        key: "Ojos",
        color: "#7f7f7f",
        y: 4
      },
      {
        key: "Brazos",
        color: "#dbdb8d",
        y: 1
      },
      {
        key: "Manos",
        color: "#8c564b",
        y: 1
      },
      {
        key: "Pies",
        color: "#c7c7c7",
        y: 3
      },
      {
        key: "Oídos",
        color: "#17becf",
        y: 2
      },
      {
        key: "Cara",
        color: "#f7b6d2",
        y: 1
      },
      {
        key: "Tronco",
        colo: "#e377c2",
        y: 4
      },
      {
        key: "Piernas",
        color: "#c49c94",
        y: 5
      },
      {
        key: "Otros",
        color: "#bcbd22",
        y: 9
      }
    ];

    var colors = [];
    for(var i=0; i< affectedPart.length; i++) { colors.push(affectedPart[i].color); }

    nv.addGraph(function() {
      var width = 500,
        height = 500;

      var chart = nv.models.pieChart()
        .x(function(d) { return d.key + ' - ' + d.y })
        .y(function(d) { return d.y })
        .labelType("percent")
        .color(colors);

      chart.tooltipContent(function(key, y, e, graph) { return '<h3>' + key + '</h3><p>' +  Math.round(y) + '</p>' });

      d3.select("#graphicAffectedPart svg")
        .datum(affectedPart)
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);
      return chart;
    });
    // end Report: Accidents by affected part of human body

    // Report: Accidents by time of occurrence
    try {
      c3.generate({
        bindto: '#graphicTimeOfOccurrence',
        data: {
          columns: [
            ['', 1, 2, 3, 4, 1, 0, 2, 3, 6, 1, 2, 3, 1, 0, 6, 1, 2]
          ]
        },
        axis: {
          x: {
            label: 'Hora',
            type: 'categorized',
            categories: ['7-8', '8-9', '9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-00']
          },
          y: {
            label: 'Cantidad'
          }
        }
      });
    } catch(err) {
      //console.log(err);
    }
    // end Report: Accidents by time of occurrence

    //  Report: Accidents by place of occurrence
    var placeOfOccurrenceData = [
      {
        key: "Sede Corporativa",
        color: "#9edae5",
        y: 1
      },
      {
        key: "Unidad AAA",
        color: "#7f7f7f",
        y: 4
      },
      {
        key: "Unidad DDD",
        color: "#dbdb8d",
        y: 5
      },
      {
        key: "Unidad EEE",
        color: "#bcbd22",
        y: 2
      },
      {
        key: "Unidad GGG",
        color: "#c7c7c7",
        y: 1
      },
      {
        key: "Unidad HHH",
        color: "#17becf",
        y: 3
      }
    ];

    var placeOfOccurrenceColors = [];
    for(var j=0; j< placeOfOccurrenceData.length; j++) { placeOfOccurrenceColors.push(placeOfOccurrenceData[j].color); }

    nv.addGraph(function() {
      var width = 500,
        height = 500;

      var chart = nv.models.pieChart()
        .x(function(d) { return d.key + ' - ' + d.y })
        .y(function(d) { return d.y })
        .labelType("percent")
        .color(placeOfOccurrenceColors);

      chart.tooltipContent(function(key, y, e, graph) { return '<h3>' + key + '</h3><p>' +  Math.round(y) + '</p>' });

      d3.select("#graphicPlaceOfOccurrence svg")
        .datum(placeOfOccurrenceData)
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);
      return chart;
    });
    // end Report: Accidents by place of occurrence

    // Report: Accidents by accident type * sector normative
    var historicalBarChart = [
      {
        key: "",
        values: [
          {
            "label" : "Desprendimiento de Rocas" ,
            "value" : 0.1
          } ,
          {
            "label" : "Operación de Carga y Descarga" ,
            "value" : 0.2
          } ,
          {
            "label" : "Acarreo y transporte" ,
            "value" : 0
          } ,
          {
            "label" : "Manipulación de materiales" ,
            "value" : 0.1
          } ,
          {
            "label" : "Caida de personas" ,
            "value" : 0
          } ,
          {
            "label" : "Operación de maquinarias" ,
            "value" : 0.05
          } ,
          {
            "label" : "Perforación de taladros" ,
            "value" : 0.05
          } ,
          {
            "label" : "Explosivos" ,
            "value" : 0.1
          },
          {
            "label" : "Herramientas" ,
            "value" : 0
          },
          {
            "label" : "Tránsito" ,
            "value" : 0
          },
          {
            "label" : "Intoxicación" ,
            "value" : 0
          },
          {
            "label" : "Energía eléctrica" ,
            "value" : 0.2
          },
          {
            "label" : "Temperaturas extremas" ,
            "value" : 0.05
          },
          {
            "label" : "Succión de mineral/desmonte" ,
            "value" : 0.05
          },
          {
            "label" : "Desatoro de chutes, tolva y otros" ,
            "value" : 0
          },
          {
            "label" : "Caida de rayos" ,
            "value" : 0
          },
          {
            "label" : "Sintomas de ebriedad" ,
            "value" : 0
          },
          {
            "label" : "Radiación" ,
            "value" : 0
          },
          {
            "label" : "Gaseamiento" ,
            "value" : 0.1
          },
          {
            "label" : "Asfixia" ,
            "value" : 0
          },
          {
            "label" : "No uso de EPP" ,
            "value" : 0
          },
          {
            "label" : "Otros" ,
            "value" : 0
          },
          {
            "label" : "Derrumbe, deslizamiento, soplado de mineral o escombros" ,
            "value" : 0
          },
          {
            "label" : "Falta de guardas/protección de equipos estacionarios y en movimiento" ,
            "value" : 0
          }
        ]
      }
    ];
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .valueFormat(d3.format('%'))
          //.staggerLabels(true)
          .showValues(true)
          .transitionDuration(250)
          .margin({top:5, bottom: 10});

      chart.yAxis
        .axisLabel('Cantidad')
        .axisLabelDistance(40)
        .tickFormat(d3.format('%'));

      chart.showXAxis(false);
      //chart.showLegend(true);

      chart.xAxis //don't show bar labels on axis
        .axisLabel("Tipo de Accidente");

      var svg = d3.select('#graphicAccidentTypeSectorNormative svg')
        .datum(historicalBarChart);

      svg.transition().duration(500)
        .call(chart);

// the following code will create a legends too
//      var makeLegend = nv.models.legend()
//        //initialize legend function
//        .key(function(d) { return d.label; });
//      //tell the function which property to use as text
//      svg.append("g")
//        .attr("class", "legend")
//        .attr('width', legendWidth)
//        .attr('height', legendHeight)
//        //add a group to hold legend, position as necessary
//        //(no positioning will draw legend across top of SVG)
//
//        .datum(historicalBarChart[0].values)
//        //set data to the array of objects you want
//        //included in the legend
//
//        .transition().duration(500)
//        .call(makeLegend); //make it so

      nv.utils.windowResize(chart.update);
//      nv.utils.windowResize(makeLegend); //doesn't seem to make much difference, but...

      return chart;
    });

    //Format A
    var labels = [];
    var l = historicalBarChart[0].values.length;
    for(var x=0; x<l; x++) {
      labels.push({key: historicalBarChart[0].values[x].label +  ' - ' + historicalBarChart[0].values[x].value * 100});
    }
    nv.addGraph({
      generate: function() {
        var width = 500,
          height = 200;

        var chart = nv.models.legend()
          .width(width)
          .height(height);

        d3.select('#graphicAccidentTypeSectorNormativeLegend')
          .datum(labels)
          .call(chart);

        return chart;
      },
      callback: function(graph) {
        var chart = graph,
          height = chart.height();

        d3.select('#graphicAccidentTypeSectorNormativeLegend')
          .attr('height', height)
          .call(chart)
      }
    });
    // END Report: Accidents by accident type * sector normative

    // Report: Accidents by accident type * law
    var lawAccidentTypeData = [
      {
        key: "",
        values: [
          {
            "label" : "Caída de personas a nivel" ,
            "value" : 0.1
          } ,
          {
            "label" : "Caída de personas de altura",
            "value" : 0.2
          },
          {
            "label" : "Caída de personas al agua",
            "value" : 0
          },
          {
            "label" : "Caída de objetos",
            "value" : 0.1
          },
          {
            "label" : "Derrumbes o desplomes de instalaciones",
            "value" : 0
          } ,
          {
            "label" : "Pisadas sobre objeto",
            "value" : 0.05
          } ,
          {
            "label" : "Choque contra objeto",
            "value" : 0.05
          } ,
          {
            "label" : "Golpes por objetos( Excepto caídas)",
            "value" : 0.1
          },
          {
            "label" : "Aprisionamiento o atrapamiento",
            "value" : 0
          },
          {
            "label" : "Esfuerzo físico o falsos  movimientos",
            "value" : 0
          },
          {
            "label" : "Exposición al frío",
            "value" : 0
          },
          {
            "label" : "Exposición al calor",
            "value" : 0.2
          },
          {
            "label" : "Exposición a radiaciones ionizantes",
            "value" : 0.05
          },
          {
            "label" : "Exposición a radiaciones no ionizantes",
            "value" : 0.05
          },
          {
            "label" : "Exposición a productos químicos",
            "value" : 0
          },
          {
            "label" : "Contacto con electricidad",
            "value" : 0
          },
          {
            "label" : "Contacto con productos químicos",
            "value" : 0
          },
          {
            "label" : "Contacto con plaguicidas",
            "value" : 0
          },
          {
            "label" : "Contacto con fuego",
            "value" : 0.1
          },
          {
            "label" : "Contacto con materiales calientes o incandescentes",
            "value" : 0
          },
          {
            "label" : "Contacto con frío",
            "value" : 0
          },
          {
            "label" : "Contacto con calor",
            "value" : 0
          },
          {
            "label" : "Explosión o implosión",
            "value" : 0
          },
          {
            "label" : "Incendio",
            "value" : 0
          },
          {
            "label" : "Atropellamiento por animales",
            "value" : 0
          },
          {
            "label" : "Mordedura de animales",
            "value" : 0
          },
          {
            "label" : "Choque de vehículos",
            "value" : 0
          },
          {
            "label" : "Atropellamiento por vehículos",
            "value" : 0
          },
          {
            "label" : "Falla en mecanismos para trabajos hiperbaricos",
            "value" : 0
          },
          {
            "label" : "Agresión con armas",
            "value" : 0
          },
          {
            "label" : "Otras formas",
            "value" : 0
          }
        ]
      }
    ];
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .valueFormat(d3.format('%'))
        .showValues(true)
        .transitionDuration(250)
        .margin({top:5, bottom: 10});

      chart.yAxis
        .axisLabel('Cantidad')
        .axisLabelDistance(40)
        .tickFormat(d3.format('%'));

      chart.showXAxis(false);
      chart.xAxis.axisLabel("Tipo de Accidente");

      var svg = d3.select('#graphicAccidentTypeLaw svg')
        .datum(lawAccidentTypeData);

      svg.transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);
      return chart;
    });
    // legend
    var lawAccidentTypeDataLabels = [];
    var ll = lawAccidentTypeData[0].values.length;
    for(var z=0; z<ll; z++) {
      lawAccidentTypeDataLabels.push({key: lawAccidentTypeData[0].values[z].label +  ' - ' + lawAccidentTypeData[0].values[z].value * 100});
    }
    nv.addGraph({
      generate: function() {
        var width = 800,
          height = 200;

        var chart = nv.models.legend()
          .width(width)
          .height(height);

        d3.select('#graphicAccidentTypeLawLegend')
          .datum(lawAccidentTypeDataLabels)
          .call(chart);

        return chart;
      },
      callback: function(graph) {
        var chart = graph,
          height = chart.height();

        d3.select('#graphicAccidentTypeLawLegend')
          .attr('height', height)
          .call(chart)

        d3.select("#graphicAccidentTypeLawLegend .nv-legend g").attr("transform", "translate(30, 5)");
      }
    });
    // END Report: Accidents by accident type * law

    // Report: Accidents by risk type
    var riskTypeData = [
      {
        key: "Caida de personas al mismo nivel",
        color: "#1f77b4",
        y: 4
      },
      {
        key: "Golpes por objetos/herramientas ",
        color: "#aec7e8",
        y: 1
      },
      {
        key: "Contactos térmicos",
        color: "#ff7f0e",
        y: 0
      },
      {
        key: "Atropellos o golpes con vehiculos",
        color: "#ffbb78",
        y: 0
      },
      {
        key: "Colisión de vehiculos",
        color: "#2ca02c",
        y: 2
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
      d3.select("#graphicAccidentRiskType svg")
        .datum(riskTypeData)
        .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);
      return chart;
    });
    // Report: END Accidents by risk type
  }]);