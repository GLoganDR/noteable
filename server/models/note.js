'use strict';

var pg = require('../postgres/manager');

function Note(n){
  this.title = n.title;
  this.body = n.body;
}

Note.create = function(n, cb){
  var note = new Note(n);
  pg.query('insert into notes(title, body) values($1, $2) returning id', [note.title, note.body], function(err, results){
    return cb(err, results);
  });
};

module.exports = Note;
