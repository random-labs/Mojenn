'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('mojenn.services', []).
  value('version', 'alpha.1');
