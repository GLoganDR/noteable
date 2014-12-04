'use strict';


var Note = require('../../../models/note');

module.exports = {
  description: 'Create a new note',
  tags: ['new', 'note'],
  auth: {
    mode: 'try'
  },
  handler: function(request, reply){
    request.payload.userId = request.auth.credentials.id;
    Note.create(request.payload, function(){
      reply();
    });
  }
};
