'use strict';

var Hapi         = require('hapi'),
  server         = new Hapi.Server('0.0.0.0', process.env.PORT),
  routes         = require('./routes/config/routes'),
  plugins        = require('./routes/config/plugins'),
  authentication = require('./routes/config/authentication');


