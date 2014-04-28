'use strict';


angular.module('xims.cause')
  .service('CauseService', ['$http', function($http) {
    var self = this;
    self.subStandardActId = 0;
    self.subStandardConditionId = 1;
    self.basicCauses = [
      {
        id: 1,
        name: 'Capacidad Fisica/Fisiológica Inadecuada',
        system_needs: [6, 9, 12, 15, 18],
        sub_basic_causes: [
          {id: 1, name: 'Altura, peso, talla, fuerza, alcance, etc, inapropiados'},
          {id: 2, name: 'Movimiento corporal limitado'},
          {id: 3, name: 'Capacidad limitada para sostener posiciones corporales'},
          {id: 4, name: 'Sensibilidad a sustancias o alergias'},
          {id: 5, name: 'Sensibilidad a extremos sensoriales (temperatura, sonido, etc.)'},
          {id: 6, name: 'Deficiencia visual'},
          {id: 7, name: 'Deficiencia auditiva'},
          {id: 8, name: 'Otras deficiencias (tacto, gusto, olfato, equilibrio)'},
          {id: 9, name: 'Incapacidad respiratoria'},
          {id: 10, name: 'Otras incapacidades físicas permanentes'},
          {id: 11, name: 'Incapacidades temporales'}
        ]
      },
      {
        id: 2,
        name: 'Capacidad Mental/Sicológica Inadecuada',
        system_needs: [6, 9, 10, 15, 18],
        sub_basic_causes: [
          {id: 1, name: 'Temores y fobias'},
          {id: 2, name: 'Disturbios emocionales'},
          {id: 3, name: 'Enfermedad mental'},
          {id: 4, name: 'Nivel de inteligencia'},
          {id: 5, name: 'Incapacidad para comprender'},
          {id: 6, name: 'Mal juicio'},
          {id: 7, name: 'Mala coordinación'},
          {id: 8, name: 'Reacción lenta'},
          {id: 9, name: 'Poca aptitud mecánica'},
          {id: 10, name: 'Poca aptitud de aprendizaje'},
          {id: 11, name: 'Falla de memoria'}
        ]
      },
      {
        id: 3,
        name: 'Tensión Fisica o Fisiológica',
        system_needs: [4, 6, 9, 11, 12, 13, 15, 18, 20],
        sub_basic_causes: [
          {id: 1, name: 'Lesión o Enfermedad'},
          {id: 2, name: 'Fatiga por carga o duración de tarea'},
          {id: 3, name: 'Fatiga por falta de descanso'},
          {id: 4, name: 'Fatiga por sobrecarga sensitiva'},
          {id: 5, name: 'Exposición a riesgos contra la salud'},
          {id: 6, name: 'Exposición a temperaturas extremas'},
          {id: 7, name: 'Insuficiencia de oxigeno'},
          {id: 8, name: 'Variación de presión atmosférica'},
          {id: 9, name: 'Movimiento restringido'},
          {id: 10, name: 'Insuficiencias de azucar en la sangre'},
          {id: 11, name: 'Drogas'}
        ]
      },
      {
        id: 4,
        name: 'Tensión Mental o Sicológica',
        system_needs: [1, 4, 5, 6, 10, 11, 12, 15, 16, 18, 20],
        sub_basic_causes: [
          {id: 1, name: 'Sobrecarga emocional'},
          {id: 2, name: 'Fatiga por carga o velocidad de tarea mental'},
          {id: 3, name: 'Demandas extremada de opinión/decisión'},
          {id: 4, name: 'Rutina, monotonía de trabajos no importantes'},
          {id: 5, name: 'Demandas extremadas de concentración/percepción'},
          {id: 6, name: 'Actividades "sin sentido" o "degradantes"'},
          {id: 7, name: 'Direcciones y demandas confusas'},
          {id: 8, name: 'Peticiones conflictivas'},
          {id: 9, name: 'Preocupación por problemas'},
          {id: 10, name: 'Frustración'},
          {id: 11, name: 'Enfermedad mental'}
        ]
      },
      {
        id: 5,
        name: 'Falta de conocimiento',
        system_needs: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 18, 20],
        sub_basic_causes: [
          {id: 1, name: 'Falta de experiencia'},
          {id: 2, name: 'Orientación deficiente'},
          {id: 3, name: 'Adiestramiento inicial inadecuado'},
          {id: 4, name: 'Asiestramiento actualizado deficiente'},
          {id: 5, name: 'Direcciones malentendidas'}
        ]
      },
      {
        id: 6,
        name: 'Falta de Habilidad',
        system_needs: [2, 4, 5, 6, 7, 9, 10, 13, 15, 16],
        sub_basic_causes: [
          {id: 1, name: 'Instrucción inicial deficiente'},
          {id: 2, name: 'Práctica insuficiente'},
          {id: 3, name: 'Ejecución poco frecuente'},
          {id: 4, name: 'Falta de preparación/asesoramiento'},
          {id: 5, name: 'Revisión inadecuada de instrucciones'}
        ]
      },
      {
        id: 7,
        name: 'Motivación Inadecuada',
        system_needs: [1, 2, 4, 5, 6, 8, 10, 11, 13, 14, 17, 18],
        sub_basic_causes: [
          {id: 1, name: 'Premiación (tolerancia) del desempeño inadecuado'},
          {id: 2, name: 'Castigo del desempeño adecuado'},
          {id: 3, name: 'Falta de incentivos'},
          {id: 4, name: 'Frustración excesiva'},
          {id: 5, name: 'Agresión inapropiada'},
          {id: 6, name: 'Intento inapropiado de ahorrar tiempo y esfuerzo'},
          {id: 7, name: 'Intento inapropiado de evitar la incomodidad'},
          {id: 8, name: 'Intento inapropiado de captar la atención'},
          {id: 9, name: 'Disciplina inadecuada'},
          {id: 10, name: 'Presión inapropiada de los compañeros'},
          {id: 11, name: 'Ejemplo inapropiado de supervisión'},
          {id: 12, name: 'Retroalimentación deficiente del desempeño'},
          {id: 13, name: 'Refuerzo deficiente del comportamiento inadecuado'},
          {id: 14, name: 'Incentivos de producción inapropiada'}
        ]
      },
      {
        id: 8,
        name: 'Liderazgo y/o Supervisión Inadecuada',
        system_needs: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        sub_basic_causes: [
          {id: 1, name: 'Relaciones jerárquicas poco claras o conflictivas'},
          {id: 2, name: 'Asignación de responsabilidad poco clara o conflictiva'},
          {id: 3, name: 'Delegación insuficiente o inadecuada'},
          {id: 4, name: 'Dar políticas, procedimientos, prácticas o pautas de acción inadecuadas'},
          {id: 5, name: 'Dar objetivos, metas, normas contradictorias'},
          {id: 6, name: 'Programación o planificación inadecuada de trabajar'},
          {id: 7, name: 'Instrucción/orientación y/o preparación deficiente'},
          {id: 8, name: 'Documentos de referencia, instrucciones y publicaciones de asesoramiento inadecuados a nuestra disposición'},
          {id: 9, name: 'Identificación y evaluación deficiente de exposiciones a pérdida'},
          {id: 10, name: 'Conocimiento inadecuado del trabajo de supervisión/administración'},
          {id: 11, name: 'Asignación inadecuada del trabajador, a las exigencias de la tarea'},
          {id: 12, name: 'Medición y evaluación deficiente del desempeño'},
          {id: 13, name: 'Retroalimentación deficiente o incorrecta del desempeño'}
        ]
      },
      {
        id: 9,
        name: 'Ingeniería Inadecuada',
        system_needs: [1, 3, 4, 9, 12, 14],
        sub_basic_causes: [
          {id: 1, name: 'Evaluación inadecuada de las exposiciones a pérdidas'},
          {id: 2, name: 'Consideración deficiente de factores ergonómicos / humanos'},
          {id: 3, name: 'Estándares y especificaciones y/o criterios de diseño deficientes'},
          {id: 4, name: 'Control inadecuado de la construcción'},
          {id: 5, name: 'Evaluación inadecuada de condiciones operacionales'},
          {id: 6, name: 'Controles inadecuados'},
          {id: 7, name: 'Monitoreo u operación inicial inadecuado'},
          {id: 8, name: 'Evaluación inadecuada del cambio'}
        ]
      },
      {
        id: 10,
        name: 'Adquisiciones Inadecuadas',
        system_needs: [1, 3, 4, 6, 9, 12, 13, 14, 15, 19],
        sub_basic_causes: [
          {id: 1, name: 'Especificaciones deficientes de órdenes y pedidos'},
          {id: 2, name: 'Investigación inadecuada del material / equipo'},
          {id: 3, name: 'Especificaciones inadecuadas a vendedores'},
          {id: 4, name: 'Modalidad o ruta de reembarque inadecuada'},
          {id: 5, name: 'Inspección de recepción deficiente'},
          {id: 6, name: 'Comunicación inadecuada de información de salud y seguridad'},
          {id: 7, name: 'Manejo inadecuado de materiales'},
          {id: 8, name: 'Almacenamiento inadecuado de materiales'},
          {id: 9, name: 'Transporte inadecuado de materiales'},
          {id: 10, name: 'Identificación deficiente de materiales peligrosos'},
          {id: 11, name: 'Disposición inadecuada de residuos y desperdicios'},
          {id: 12, name: 'Selección inadecuada de contratistas'}
        ]
      },
      {
        id: 11,
        name: 'Mantenimiento Inadecuado',
        system_needs: [],
        sub_basic_causes_level: 2,
        sub_basic_causes: [
          {
            id: 1,
            name: 'Prevención inadecuada',
            sub_basic_causes: [
              {id: 1, name: 'Evaluación de necesidades'},
              {id: 2, name: 'Lubricación y servicio'},
              {id: 3, name: 'Ajuste/ensamble'},
              {id: 4, name: 'Limpieza o pulimento'}
            ]},
          {
            id: 2,
            name: 'Reparación inadecuada',
            sub_basic_causes: [
              {id: 1, name: 'Comunicación de necesidades'},
              {id: 2, name: 'Planeamiento del trabajo'},
              {id: 3, name: 'Examinación de unidades'},
              {id: 4, name: 'Substitución de partes'}
            ]
          }
        ]
      },
      {
        id: 12,
        name: 'Herramientas y Equipos Inadecudos',
        system_needs: [],
        sub_basic_causes: [
          {id: 1, name: 'Evaluación deficiente de necesidades y riesgos'},
          {id: 2, name: 'Consideración inadecuada de factores humanos/ergonómicos'},
          {id: 3, name: 'Estándares o especificaciones inadecuadas'},
          {id: 4, name: 'Disponibilidad inadecuada'},
          {id: 5, name: 'Ajuste/reparación/mantenimiento deficiente'},
          {id: 6, name: 'Salvamente y reclamación inadecuada'},
          {id: 7, name: 'Inadecuada remoción y reemplazo de artículos deficientes'}
        ]
      },
      {
        id: 13,
        name: 'Estándares de Trabajo Inadecuados',
        system_needs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 19],
        sub_basic_causes_level: 2,
        sub_basic_causes: [
          {
            id: 1,
            name: 'Desarrollo inadecuado de estándares para',
            sub_basic_causes: [
              {id: 1, name: 'Inventario y evaluación de exposiciones y necesidades'},
              {id: 2, name: 'Coordinación en el diseño del proceso'},
              {id: 3, name: 'Involucración del empleado'},
              {id: 4, name: 'Estándares, procedimientos, reglas'}
            ]
          },
          {
            id: 2,
            name: 'Comunicación inadecuada de estándares para',
            sub_basic_causes: [
              {id: 1, name: 'Publicaciones'},
              {id: 2, name: 'Distribución'},
              {id: 3, name: 'Traducción a idiomas inapropiados'},
              {id: 4, name: 'Entrenamiento'},
              {id: 5, name: 'Reforzamiento con símbolos, códigos, símbolos de color y ayudas del trabajo'}
            ]
          },
          {
            id: 3,
            name: 'Manutención inadecuada de estándares para',
            sub_basic_causes: [
              {id: 1, name: 'Seguimiento de flujo de trabajo'},
              {id: 2, name: 'Actualización'},
              {id: 3, name: 'Monitoreo del uso de estándares para:'}, //todo: should this be a nested level?
              {id: 4, name: 'Monitoreo inadecuado del cumplimiento'}
            ]
          }

        ]
      },
      {
        id: 14,
        name: 'Uso y Desgaste Excesivo',
        system_needs: [3, 4, 6, 9, 10, 13, 14, 15],
        sub_basic_causes: [
          {id: 1, name: 'Planificación inadecuada de uso'},
          {id: 2, name: 'Extensión inadecuada de uso'},
          {id: 3, name: 'Inspección y/o control deficiente'},
          {id: 4, name: 'Carga o proporción de uso deficiente'},
          {id: 5, name: 'Mantenimiento deficiente'},
          {id: 6, name: 'Uso por personas no calificadas/entrenadas'},
          {id: 7, name: 'Uso para propósitos indebidos'}
        ]
      },
      {
        id: 15,
        name: 'Abuso o Mal Uso',
        system_needs: [1, 3, 4, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19],
        sub_basic_causes_level: 2,
        sub_basic_causes: [
          {
            id: 1,
            name: 'Conducta inapropiada censurada',
            sub_basic_causes: [
              {id: 1, name: 'Intencional'},
              {id: 2, name: 'No intencional'}
            ]
          },
          {
            id: 2,
            name: 'Conducta inapropiada permitida',
            sub_basic_causes: [
              {id: 1, name: 'Intencional'},
              {id: 2, name: 'No intencional'}
            ]
          }
        ]
      }
    ];
    self.systemNeeds = [
      {id: 1,
        name: 'Liderazgo y Administración',
        sub_system_needs: [
          {id: 1, name: 'Política General'},
          {id: 2, name: 'Coordinador de Control de Pérdidas'},
          {id: 3, name: 'Participación de la Gerencia Superior y Media'},
          {id: 4, name: 'Estándares de Desempeño de Control de Pérdidas'},
          {id: 5, name: 'Participación en Actividades de Control de Pérdidas'},
          {id: 6, name: 'Reuniones de la Gerencia'},
          {id: 7, name: 'Manual de Referencia de Control de Pérdidas'},
          {id: 8, name: 'Auditorías Internas'},
          {id: 9, name: 'Responsabilidad Individua! de Control de Pérdidas'},
          {id: 10, name: 'Objetivos Anuales de Control de Pérdidas'},
          {id: 11, name: 'Comités Conjuntos de Seguridad y Salud y/o Representantes de Seguridad y Salud'},
          {id: 12, name: 'Negativa a Trabajar Debido a Peligros de Control de Pérdidas'},
          {id: 13, name: 'Biblioteca de Referencia'},
          {id: 14, name: 'Control de Documentos'},
          {id: 15, name: 'Regulaciones, Códigos y Estándares'},
          {id: 16, name: 'Comunicaciones Externas'}
        ]},
      {
        id: 2,
        name: 'Entrenamiento de liderazgo',
        sub_system_needs: [
          {id: 1, name: 'Análisis de necesidades  de Entrenamiento'},
          {id: 2, name: 'Orientación/Inducción de Liderazgo en Control de Pérdidas.'},
          {id: 3, name: 'Entrenamiento Formal Inicial de la Gerencia Superior.'},
          {id: 4, name: 'Repaso, Actualización y Entrenamiento Formal Avanzado de la Gerencia Superior.'},
          {id: 5, name: 'Entrenamiento Formal Inicial del Liderazgo en Control de Pérdidas.'},
          {id: 6, name: 'Repaso, Actualización y Entrenamiento Formal Avanzado del Liderazgo de Control de Pérdidas. '},
          {id: 7, name: 'Entrenamiento Formal del Coordinador de Control de Pérdidas'},
          {id: 8, name: 'Registros de Entrenamiento '}
        ]},
      {
        id: 3,
        name: 'Inspecciones planeadas y mantenimiento',
        sub_system_needs: [
          {id: 1, name: 'Inspecciones Generales Planeadas'},
          {id: 2, name: 'Sistema de Seguimiento'},
          {id: 3, name: 'Análisis del Informe de Inspección'},
          {id: 4, name: 'Partes/Artículos Críticos'},
          {id: 5, name: 'Mantenimiento Preventivo'},
          {id: 6, name: 'Inspecciones de Sistemas Especiales'},
          {id: 7, name: 'Inspecciones de Pre-Uso del Equipo'},
          {id: 8, name: 'Sistema Alterno para Reportar Condiciones Subestándares '},
          {id: 9, name: 'Requisitos de Cumplimiento'}
        ]},
      {
        id: 4,
        name: 'Análisis y procedimientos de tareas críticas',
        sub_system_needs: [
          {id: 1, name: 'Administración'},
          {id: 2, name: 'Inventario de Tareas Críticas'},
          {id: 3, name: 'Objetivos del Análisis y Procedimientos de Tareas Críticas'},
          {id: 4, name: 'Análisis y Procedimientos de Tareas Críticas'},
          {id: 5, name: 'Identificación y Control de Pérdidas Potenciales '}
        ]},
      {
        id: 5,
        name: 'Investigación de accidentes / incidentes',
        sub_system_needs: [
          {id: 1, name: 'Sistema de Investigación de Accidentes/Incidentes'},
          {id: 2, name: 'Participación de la Gerencia Operativa'},
          {id: 3, name: 'Accidentes/Incidentes Graves y con Alto Potencial'},
          {id: 4, name: 'Acciones Correctivas y de Seguimiento'},
          {id: 5, name: 'Investigación y Reporte de Incidentes (Casi-Accidentes)'},
          {id: 6, name: 'Mantenimiento de Informes de Accidentes/Incidentes'}
        ]},
      {
        id: 6,
        name: 'Observación de tareas',
        sub_system_needs: [
          {id: 1, name: 'Administración'},
          {id: 2, name: 'Observación parcial/Selectiva de Tareas'},
          {id: 3, name: 'Observación Completa de Tareas'},
          {id: 4, name: 'Observación de Tareas Críticas'},
          {id: 5, name: 'Sistema de Seguimiento'},
          {id: 6, name: 'Análisis de Informes de Observaciones de Tareas'}
        ]},
      {
        id: 7,
        name: 'Preparación para emergencias',
        sub_system_needs: [
          {id: 1, name: 'Administración'},
          {id: 2, name: 'Análisis de Reacción a Emergencias'},
          {id: 3, name: 'Plan de Emergencia'},
          {id: 4, name: 'Emergencias Externas'},
          {id: 5, name: 'Controles de Fuentes de Energía'},
          {id: 6, name: 'Sistemas de Protección y Rescate'},
          {id: 7, name: 'Equipos de Emergencia'},
          {id: 8, name: 'Sistema de Experiencias Adquiridas'},
          {id: 9, name: 'Primeros Auxilios'},
          {id: 10, name: 'Ayuda Mutua y Asistencia Externa Organizada'},
          {id: 11, name: 'Planeamiento después del Evento'},
          {id: 12, name: 'Comunicación de Caso de Emergencia'},
          {id: 13, name: 'Comunicados a la Comunidad'}
        ]
      },
      {
        id: 8,
        name: 'Reglas y permisos de trabajo',
        sub_system_needs: [
          {id: 1, name: 'Reglas Generales de Control de Pérdidas'},
          {id: 2, name: 'Reglas de Trabajo Especializado'},
          {id: 3, name: 'Sistema de Permisos de Trabajo Especializado'},
          {id: 4, name: 'Sistema de Permisos de Operación'},
          {id: 5, name: 'Aprendizaje y Revisión de Reglas'},
          {id: 6, name: 'Cumplimiento y reconocimiento de las reglas'},
          {id: 7, name: 'Uso de Letreros de Instrucción y Códigos de Colores'}
        ]
      },
      {
        id: 9,
        name: 'Análisis de accidentes/incidentes',
        sub_system_needs: [
          {id: 1, name: 'Mediciones de Consecuencia'},
          {id: 2, name: 'Análisis de Causa y Control'},
          {id: 3, name: 'Identificación y Análisis del Daño a la Propiedad/Proceso'},
          {id: 4, name: 'Análisis de Incidentes (Casi-accidentes)'},
          {id: 5, name: 'Equipos para la Solución de Problemas '},

        ]
      },
      {
        id: 10,
        name: 'Entrenamiento de conocimiento y habilidades',
        sub_system_needs: [
          {id: 1, name: 'Administración'},
          {id: 2, name: 'Análisis de Necesidades de Entrenamiento'},
          {id: 3, name: 'Calificaciones del Instructor'},
          {id: 4, name: 'Sistemas de Entrenamiento'},
          {id: 5, name: 'Evaluación del Sistema de Entrenamiento y Seguimiento'}
        ]
      },
      {
        id: 11,
        name: 'Equipo de protección personal',
        sub_system_needs: [
          {id: 1, name: 'Identificación de Necesidades de Equipo de Protección Personal'},
          {id: 2, name: 'Registros de Equipo de Protección Personal'},
          {id: 3, name: 'Cumplimiento con los estándares'}
        ]
      },
      {
        id: 12,
        name: 'Control de salud e higiene industrial',
        sub_system_needs: [
          {id: 1, name: 'Administración'},
          {id: 2, name: 'Identificación y Evaluación  de Riesgos a la Salud'},
          {id: 3, name: 'Control de Riesgos a la Salud'},
          {id: 4, name: 'Control de Salud Ocupacional e Higiene Industrial'},
          {id: 5, name: 'Información y Entrenamiento'},
          {id: 6, name: 'Sistema de Cuidados de Salud'},
          {id: 7, name: 'Asistencia Profesional'},
          {id: 8, name: 'Comunicaciones'},
          {id: 9, name: 'Registros'},
          {id: 10, name: ''}
        ]
      },
      {
        id: 13,
        name: 'Evaluación del sistema',
        sub_system_needs: [
          {id: 1, name: 'Evaluación de Requisitos de Control de Pérdidas'},
          {id: 2, name: 'Evaluación Regular del Sistema'},
          {id: 3, name: 'Evaluación del Cumplimiento con los Estándares del Sistema'},
          {id: 4, name: 'Encuestas de Percepción'},
          {id: 5, name: 'Mantenimiento de Registros'}
        ]
      },
      {
        id: 14,
        name: 'Ingenieria y administración del cambio',
        sub_system_needs: [
          {id: 1, name: 'Administración'},
          {id: 2, name: 'Identificación de Riesgos y Evaluación de Peligros'},
          {id: 3, name: 'Revisión de Proyectos y Administración del Cambio'},
          {id: 4, name: 'Controles de Operación y Procesos de Trabajo'}
        ]
      },
      {
        id: 15,
        name: 'Comunicaciones personales',
        sub_system_needs: [
          {id: 1, name: 'Entrenamiento en Técnicas de Comunicación'},
          {id: 2, name: 'Orientación/Inducción de Trabajo'},
          {id: 3, name: 'Instrucción de Tareas'},
          {id: 4, name: 'Contactos Personales Planeados'}
        ]
      },
      {
        id: 16,
        name: 'Comunicaciones en grupo',
        sub_system_needs: [
          {id: 1, name: 'Reuniones de Control de Pérdidas'},
          {id: 2, name: 'Mantenimiento de Registros'},
          {id: 3, name: 'Participación de la Administración '}
        ]
      },
      {
        id: 17,
        name: 'Promoción general',
        sub_system_needs: [
          {id: 1, name: 'Tableros para Anuncios de Control de Perdidas'},
          {id: 2, name: 'Uso de Estadísticas de Accidentes/Incidentes'},
          {id: 3, name: 'Promoción de Temas Críticos'},
          {id: 4, name: 'Premios y Reconocimiento a Individuos'},
          {id: 5, name: 'Publicaciones de Control de Pérdidas'},
          {id: 6, name: 'Premios y Reconocimientos a Grupos'},
          {id: 7, name: 'Promoción del Sistema de Orden y Limpieza'},
          {id: 8, name: 'Promociones Externas'},
          {id: 9, name: 'Registro de las Actividades de Promoción'}
        ]
      },
      {
        id: 18,
        name: 'Contratación y colocación',
        sub_system_needs: [
          {id: 1, name: 'Requisitos de Capacidad'},
          {id: 2, name: 'Examen Médico'},
          {id: 3, name: 'Orientación/Inducción General'},
          {id: 4, name: 'Revisión de Calificaciones de Pre-Empleo/ Pre-Colocación'}
        ]
      },
      {
        id: 19,
        name: 'Administración de materiales y servicios',
        sub_system_needs: [
          {id: 1, name: 'Compras de Mercancías'},
          {id: 2, name: 'Selección de Contratistas'},
          {id: 3, name: 'Administración de Contratistas.'}
        ]
      },
      {
        id: 20,
        name: 'Seguridad fuera del trabajo',
        sub_system_needs: [
          {id: 1, name: 'Identificación y análisis del Problema'},
          {id: 2, name: 'Educación de Seguridad Fuera del Trabajo'}
        ]
      }
    ];
    self.getActs = function() {
      return [
        {
          id: 1,
          name: 'Manejo de equipo sin autorización',
          basic_causes: [2, 4, 5, 7, 8, 12, 13, 15]},
        {
          id: 2,
          name: 'Falta de advertencias',
          basic_causes: [2, 4, 5, 7, 8, 12, 13, 15]},
        {
          id: 3,
          name: 'Falta de asegurar',
          basic_causes: [2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]},
        {
          id: 4,
          name: 'Manejo a velocidad inadecuada',
          basic_causes: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15]},
        {
          id: 5,
          name: 'Hacer inoperable los instrumentos de seguridad',
          basic_causes: [2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]},
        {
          id: 6,
          name: 'Uso de equipo defectuoso',
          basic_causes: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]},
        {
          id: 7,
          name: 'Uso inapropiado del EPP',
          basic_causes: [2, 3, 4, 5, 7, 8, 10, 12, 13, 15]},
        {
          id: 8,
          name: 'Carga inadecuada',
          basic_causes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15]},
        {
          id: 9,
          name: 'Almacenamiento inadecuado',
          basic_causes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]},
        {
          id: 10,
          name: 'Levantamiento inadecuado',
          basic_causes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]},
        {
          id: 11,
          name: 'Posición de tarea inadecuada',
          basic_causes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]},
        {
          id: 12,
          name: 'Manutención de equipo en operación',
          basic_causes: [2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]},
        {
          id: 13,
          name: 'Bromas',
          basic_causes: [2, 3, 4, 5, 7, 8, 13, 15]},
        {
          id: 14,
          name: 'Bajo influencia del alcohol /u otras drogas',
          basic_causes: [2, 3, 4, 5, 7, 8, 13, 15]},
        {
          id: 15,
          name: 'Uso inapropiado del equipo',
          basic_causes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15]},
        {
          id: 16,
          name: 'No seguir procedimientos',
          basic_causes: [1, 2, 3, 4, 5, 6, 7, 8, 13]}
      ];
    };
    self.getConditions = function() {
      return [
        {
          id: 17,
          name: 'Protecciones y barreras inadecuadas',
          basic_causes: [5, 7, 8, 9, 10, 11, 12, 13, 15]
        },
        {
          id: 18,
          name: 'EPP Inadecuado o impropio',
          basic_causes: [5, 7, 8, 9, 10, 12, 13]
        },
        {
          id: 19,
          name: 'Herramienta, equipo o material defectuoso',
          basic_causes: [8, 9, 10, 11, 12, 13, 14, 15]
        },
        {
          id: 20,
          name: 'Congestión o acción restringida',
          basic_causes: [8, 9, 13]
        },
        {
          id: 21,
          name: 'Sistema de advertencia inadecuado',
          basic_causes: [8, 9, 10, 11, 12, 13, 14, 15]
        },
        {
          id: 22,
          name: 'Peligro de explosión o incendio',
          basic_causes: [5, 6, 7, 8, 9, 10, 11, 12, 13, 15]
        },
        {
          id: 23,
          name: 'Desorden, aseo deficiente',
          basic_causes: [5, 6, 7, 8, 9, 10, 11, 12, 13, 15]
        },
        {
          id: 24,
          name: 'Exposiciones al ruido',
          basic_causes: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        },
        {
          id: 25,
          name: 'Exposiciones a radiación',
          basic_causes: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        },
        {
          id: 26,
          name: 'Exposición a temperaturas extremas',
          basic_causes: [1, 2, 3, 8, 9, 11, 12]
        },
        {
          id: 27,
          name: 'Iluminación inadecuada',
          basic_causes: [8, 9, 10, 11, 12, 13]
        },
        {
          id: 28,
          name: 'Ventilación inadecuada',
          basic_causes: [8, 9, 10, 11, 12, 13]
        },
        {
          id: 29,
          name: 'Condiciones ambientales peligrosas',
          basic_causes: [8, 9, 10, 11, 12, 13]
        }
      ];
    };
    self.getBasicCauses = function(substandardFactSelected) {
      // substandardFactSelected : integer, id of the substandardFact
      // immediateCauseType : integer, self.subStandardActId or self.subStandardConditionId
      if(substandardFactSelected.basic_causes) {
        var basicCauses = [];
        var l = substandardFactSelected.basic_causes.length;
        for(var i=0; i<l; i++) {
          var basicCause = self.getBasicCauseById(substandardFactSelected.basic_causes[i]);
          if(basicCause)
            basicCauses.push(basicCause);
        }
        return basicCauses;
      } else { return null; }
    };
    self.getBasicCauseById = function(basicCauseId) {
      var l = self.basicCauses.length;
      for(var i=0; i<l; i++) {
        if(self.basicCauses[i].id == basicCauseId) {
          return self.basicCauses[i];
        }
      }
      return null;
    };
    self.getSubstandardFacts = function(immediateCauseType) {
      if(immediateCauseType == self.subStandardActId)
        return self.getActs();
      else if(immediateCauseType == self.subStandardConditionId)
        return self.getConditions();
      else
        return [];
    };
    self.getSubBasicCauses = function(basicCauseSelected) {

      var l = self.basicCauses.length;
      for(var i=0; i<l; i++) {
        if(self.basicCauses[i].id == basicCauseSelected.id) {
          return self.basicCauses[i].sub_basic_causes;
        }
      }
      return null;
    };
    self.getSystemNeeds = function(basicCauseSelected) {
      var l = basicCauseSelected.system_needs.length;
      var systemNeeds = [];
      for(var i=0; i<l; i++) {
        var systemNeed = self.getSystemNeedById(basicCauseSelected.system_needs[i]);
        if(systemNeed)
          systemNeeds.push(systemNeed);
      }
      return systemNeeds;
    };
    self.getSubSystemNeeds = function(systemNeedSelected) {
      var l = self.systemNeeds.length;
      for(var i=0; i<l; i++) {
        if(self.systemNeeds[i].id == systemNeedSelected.id) {
          return self.systemNeeds[i].sub_system_needs;
        }
      }
      return null;
    };
    self.getSystemNeedById = function(systemNeedId) {
      var l = self.systemNeeds.length;
      for(var i=0; i<l; i++) {
        if(self.systemNeeds[i].id == systemNeedId) {
          return self.systemNeeds[i];
        }
      }
      return null;
    };
    self.getSubSubBasicCauses = function(subBasicCauseSelected) {
      if(subBasicCauseSelected.hasOwnProperty('sub_basic_causes'))
        return subBasicCauseSelected.sub_basic_causes;
      else
        return [];
    }
  }]);