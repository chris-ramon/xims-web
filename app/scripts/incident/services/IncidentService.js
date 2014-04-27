'use strict';


angular.module('xims.incident')
  .service('IncidentService', ['$http', function($http) {
    var self = this;
    self.incident = 0;
    self.accident = 1;

    self.getAccidentTypeByNorm = function() {
      return [
        {
          id: 0,
          "label" : "Desprendimiento de Rocas" ,
          "value" : 0.1
        } ,
        {
          id: 1,
          "label" : "Operación de Carga y Descarga" ,
          "value" : 0.2
        } ,
        {
          id: 2,
          "label" : "Acarreo y transporte" ,
          "value" : 0
        } ,
        {
          id: 3,
          "label" : "Manipulación de materiales" ,
          "value" : 0.1
        } ,
        {
          id: 4,
          "label" : "Caida de personas" ,
          "value" : 0
        } ,
        {
          id: 5,
          "label" : "Operación de maquinarias" ,
          "value" : 0.05
        } ,
        {
          id: 6,
          "label" : "Perforación de taladros" ,
          "value" : 0.05
        } ,
        {
          id: 7,
          "label" : "Explosivos" ,
          "value" : 0.1
        },
        {
          id: 8,
          "label" : "Herramientas" ,
          "value" : 0
        },
        {
          id: 9,
          "label" : "Tránsito" ,
          "value" : 0
        },
        {
          id: 10,
          "label" : "Intoxicación" ,
          "value" : 0
        },
        {
          id: 11,
          "label" : "Energía eléctrica" ,
          "value" : 0.2
        },
        {
          id: 12,
          "label" : "Temperaturas extremas" ,
          "value" : 0.05
        },
        {
          id: 13,
          "label" : "Succión de mineral/desmonte" ,
          "value" : 0.05
        },
        {
          id: 14,
          "label" : "Desatoro de chutes, tolva y otros" ,
          "value" : 0
        },
        {
          id: 15,
          "label" : "Caida de rayos" ,
          "value" : 0
        },
        {
          id: 16,
          "label" : "Sintomas de ebriedad" ,
          "value" : 0
        },
        {
          id: 17,
          "label" : "Radiación" ,
          "value" : 0
        },
        {
          id: 18,
          "label" : "Gaseamiento" ,
          "value" : 0.1
        },
        {
          id: 19,
          "label" : "Asfixia" ,
          "value" : 0
        },
        {
          id: 20,
          "label" : "No uso de EPP" ,
          "value" : 0
        },
        {
          id: 21,
          "label" : "Otros" ,
          "value" : 0
        },
        {
          id: 22,
          "label" : "Derrumbe, deslizamiento, soplado de mineral o escombros" ,
          "value" : 0
        },
        {
          id: 23,
          "label" : "Falta de guardas/protección de equipos estacionarios y en movimiento" ,
          "value" : 0
        }
      ]
    };
    self.getAccidentTypeByLaw = function() {
      return [
        {
          id: 1,
          "label" : "Caída de personas a nivel" ,
          "value" : 0.1
        } ,
        {
          id: 2,
          "label" : "Caída de personas de altura",
          "value" : 0.2
        },
        {
          id: 3,
          "label" : "Caída de personas al agua",
          "value" : 0
        },
        {
          id: 4,
          "label" : "Caída de objetos",
          "value" : 0.1
        },
        {
          id: 5,
          "label" : "Derrumbes o desplomes de instalaciones",
          "value" : 0
        } ,
        {
          id: 6,
          "label" : "Pisadas sobre objeto",
          "value" : 0.05
        } ,
        {
          id: 7,
          "label" : "Choque contra objeto",
          "value" : 0.05
        } ,
        {
          id: 8,
          "label" : "Golpes por objetos( Excepto caídas)",
          "value" : 0.1
        },
        {
          id: 9,
          "label" : "Aprisionamiento o atrapamiento",
          "value" : 0
        },
        {
          id: 10,
          "label" : "Esfuerzo físico o falsos  movimientos",
          "value" : 0
        },
        {
          id: 11,
          "label" : "Exposición al frío",
          "value" : 0
        },
        {
          id: 12,
          "label" : "Exposición al calor",
          "value" : 0.2
        },
        {
          id: 13,
          "label" : "Exposición a radiaciones ionizantes",
          "value" : 0.05
        },
        {
          id: 14,
          "label" : "Exposición a radiaciones no ionizantes",
          "value" : 0.05
        },
        {
          id: 15,
          "label" : "Exposición a productos químicos",
          "value" : 0
        },
        {
          id: 16,
          "label" : "Contacto con electricidad",
          "value" : 0
        },
        {
          id: 17,
          "label" : "Contacto con productos químicos",
          "value" : 0
        },
        {
          id: 18,
          "label" : "Contacto con plaguicidas",
          "value" : 0
        },
        {
          id: 19,
          "label" : "Contacto con fuego",
          "value" : 0.1
        },
        {
          id: 20,
          "label" : "Contacto con materiales calientes o incandescentes",
          "value" : 0
        },
        {
          id: 21,
          "label" : "Contacto con frío",
          "value" : 0
        },
        {
          id: 22,
          "label" : "Contacto con calor",
          "value" : 0
        },
        {
          id: 23,
          "label" : "Explosión o implosión",
          "value" : 0
        },
        {
          id: 24,
          "label" : "Incendio",
          "value" : 0
        },
        {
          id: 25,
          "label" : "Atropellamiento por animales",
          "value" : 0
        },
        {
          id: 26,
          "label" : "Mordedura de animales",
          "value" : 0
        },
        {
          id: 27,
          "label" : "Choque de vehículos",
          "value" : 0
        },
        {
          id: 28,
          "label" : "Atropellamiento por vehículos",
          "value" : 0
        },
        {
          id: 29,
          "label" : "Falla en mecanismos para trabajos hiperbaricos",
          "value" : 0
        },
        {
          id: 30,
          "label" : "Agresión con armas",
          "value" : 0
        },
        {
          id: 31,
          "label" : "Otras formas",
          "value" : 0
        }
      ]
    };
  }]);