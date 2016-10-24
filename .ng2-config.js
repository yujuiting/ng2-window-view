/* eslint no-var:0 */
'use strict';
var pkg = require('./package.json');

module.exports = {
  // metadata
  title: pkg.description,
  baseUrl: '/',
  // angular2 root folder name
  src: 'example',
  // dist folder name
  dist: 'example-build',
  // entry html file
  htmlIndexes: ['index.html'],
  // karma bundle src
  spec: './spec-bundle.js',
  // webpack entry
  entry: {
    polyfills: './example/polyfills.ts',
    vendor: './example/vendor.ts',
    main: './example/main.ts'
  },
  // in most cases you don't need to change this line
  commonChunks: {
    name: ['polyfills', 'vendor'].reverse()
  },
  // webpack alias (just in case)
  alias: {},
  // copy any additional files you need
  copy: [
    { from: 'example/favicon.ico', to: 'favicon.ico' },
    {
      context: 'example/app/shared',
      from: '**/*.*',
      to: 'examples'
    },
    { from: 'core/**/*.d.ts', to: 'examples/api' },
    { from: 'components/**/*.d.ts', to: 'examples/api' }
  ]
};
