const del = require('del');
const cpy = require('cpy');

del('demo/src/examples/api').then(() => {
  cpy('dist/core/**/*.d.ts', 'demo/src/examples/api/core');
  cpy('dist/components/**/*.d.ts', 'demo/src/examples/api/components');
});