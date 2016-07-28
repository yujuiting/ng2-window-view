/* eslint no-process-env: 0*/
'use strict';
/**
 * @author: @AngularClass
 */
// Look in ./config folder for webpack.dev.js
// todo: replace with path to your config
module.exports = getWebpackConfig(process.env.NODE_ENV, require('./.ng2-config'));

function getWebpackConfig(env, config) {
  switch (env) {
    case 'prod':
    case 'production':
      return require('ng2-webpack-config').webpack.prod(config);
    case 'test':
    case 'testing':
      return require('ng2-webpack-config').webpack.test(config);
    case 'dev':
    case 'development':
    default:
      return require('ng2-webpack-config').webpack.dev(config);
  }
}
