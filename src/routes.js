'use strict';

var path = require('path');

module.exports = function(app) {

  app.use('/user', require('./api/user'));
  app.use('/auth', require('./auth'));
  app.use('/leaves', require('./api/leaves'));
  app.use('/books', require('./api/books'));
  app.use('/words', require('./api/words'));

};
