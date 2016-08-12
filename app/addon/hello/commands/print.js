/* jshint node: true */
'use strict';

module.exports = {
  name: 'print',
  description: 'print hello to console',

  run: function (commandOptions, rawArgs) {
  	console.log('hello');
  }
};
