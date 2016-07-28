/**
 * @author: @AngularClass
 */
'use strict';

// Look in ./config for karma.conf.js
// todo: replace with path to your config
const config = require('./.ng2-config');

module.exports = require('ng2-webpack-config').karma(config);
