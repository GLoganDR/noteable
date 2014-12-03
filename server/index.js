'use strict';

var Hapi         = require('hapi'),
  server         = new Hapi.Server('0.0.0.0', process.env.PORT),
  plugins        = require('./routes/config/plugins'),
  routes         = require('./routes/config/routes');
  //authentication = require('./routes/config/authentication');
server.route(routes);

server.pack.register(plugins, function(){
  server.start(function(){
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

