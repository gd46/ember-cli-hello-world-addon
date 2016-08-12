/* jshint node: true */
'use strict';

module.exports = {
  name: 'hello',

  includedCommands: function () {
  	return {
  		'print': require('./commands/print')
  	}
  };
};