const gulp = require('gulp');
const run = require('run-sequence');
const del = require('del');
const inlineNg2Template = require('gulp-inline-ng2-template');
const fs = require('fs');

const vendor = [
  './node_modules/@angular/**/*.js',
  './node_modules/zone.js/dist/*.js',
  './node_modules/es6-shim/es6-shim.js',
  './node_modules/reflect-metadata/*.js',
  './node_modules/bootstrap/dist/**/*.*',
  './node_modules/prismjs/themes/**/*.css',
  './node_modules/prismjs/prism.js',
  './node_modules/rxjs/**/*.js',
  './node_modules/systemjs/dist/system.js',
  './node_modules/symbol-observable/**/*.js'
];

gulp.task('build:example', () => {
  return run(
    ['clear:example-vendor', 'clear:example-dist'],
    ['build:example-vendor', 'build:example-files']
  );
});

gulp.task('clear:example-dist', () => {
  return del('./example/dist/');
});

gulp.task('clear:example-vendor', () => {
  return del('./example/vendor/');
});

gulp.task('build:example-vendor', () => {
  gulp.src(vendor, { base: './node_modules' })
    .pipe(gulp.dest('./example/vendor'));
});

gulp.task('build:example-files', () => {
  gulp.src('./example/src/**/*.{html,css}', { base: './example/src' })
    .pipe(gulp.dest('./example/dist'));
});

gulp.task('watch:example-files', () => {
  gulp.watch('./example/src/**/*.{html,css}', ['build:example-files'])
});

gulp.task('build:lib:inline-template', () => {
  gulp.src('./lib/**/*.js', { base: './lib' })
    .pipe(inlineNg2Template({ base: './src/lib' }))
    .pipe(gulp.dest('./lib'));
});

gulp.task('build:components:inline-template', () => {
  gulp.src('./components/**/*.js', { base: './components' })
    .pipe(inlineNg2Template({ base: './src/components' }))
    .pipe(gulp.dest('./components'));
});

gulp.task('build:inline-template', () => {
  return run([
    'build:lib:inline-template',
    'build:components:inline-template'
  ])
});