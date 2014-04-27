'use strict';


angular.module('xims.incident')
  .controller('IncidentInvestigationNewCtrl', ['$scope', 'IncidentStepsService', 'IncidentService', 'CauseService',
    function($scope, IncidentStepsService, IncidentService, CauseService) {
      $scope.IncidentStepsService = IncidentStepsService;
      $scope.IncidentService = IncidentService;
      $scope.CauseService = CauseService;

      $scope.accidentTypeByNorm = IncidentService.getAccidentTypeByNorm();
      $scope.accidentTypeByLaw = IncidentService.getAccidentTypeByLaw();
      $scope.incident = {
        type: 1,
        subStandardFacts: [
          {}, {}, {}, {}
        ],
        employees:  [
          {id_number: 45996135, name: 'Chris Ramón'},
          {id_number: 55667788, name: 'Luis Rodriguez'},
          {id_number: 99900113, name: 'Carlos Dominguez'}
        ]
      };
      $scope.risks = [
        {
          name: "Caida de personas al mismo nivel",
          color: "#1f77b4",
          y: 4
        },
        {
          name: "Golpes por objetos/herramientas ",
          color: "#aec7e8",
          y: 1
        },
        {
          name: "Contactos térmicos",
          color: "#ff7f0e",
          y: 0
        },
        {
          name: "Atropellos o golpes con vehiculos",
          color: "#ffbb78",
          y: 0
        },
        {
          name: "Colisión de vehiculos",
          color: "#2ca02c",
          y: 2
        }
      ];
      $scope.substandardActs = [
        {id: 1, name: 'Manejo de equipo sin autorización'},
        {id: 2, name: 'Falta de advertencias'},
        {id: 3, name: 'Falta de asegurar'},
        {id: 4, name: 'Manejo a velocidad inadecuada'},
        {id: 5, name: 'Hacer inoperable los instrumentos de seguridad'},
        {id: 6, name: 'Uso de equipo defectuoso'},
        {id: 7, name: 'Uso inapropiado del EPP'},
        {id: 8, name: 'Carga inadecuada'},
        {id: 9, name: 'Almacenamiento inadecuado'},
        {id: 10, name: 'Levantamiento inadecuado'},
        {id: 11, name: 'Posición de tarea inadecuada'},
        {id: 13, name: 'Bromas'},
        {id: 14, name: 'Bajo influencia del alcohol /u otras drogas'},
        {id: 15, name: 'Uso inapropiado del equipo'},
        {id: 16, name: 'No seguir procedimientos'}
      ];

    }]);