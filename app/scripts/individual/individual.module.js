'use strict';


angular.module('xims.individual', [])
  .run(function($templateCache) {
    $templateCache.put("template/individual/typeaheadIndividualTemplate.html",
    "<a tabindex=\"-1\">\n  <span>DNI: {{ match.model.id_number }}</span> -\n  <span bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></span>\n</a>");
  });
