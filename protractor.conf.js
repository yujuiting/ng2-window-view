/**
 * @author: @AngularClass
 */
'use strict';

// look in ./config for protractor.conf.js
// todo: replace with path to your config
const config = require('./.ng2-config');

module.exports.config = require('ng2-webpack-config').protractor(config);
