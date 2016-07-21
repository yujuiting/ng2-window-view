const gulp = require('gulp');
const run = require('run-sequence');
const del = require('del');
const inlineNg2Template = require('gulp-inline-ng2-template');
const ts = require('gulp-tsc');
const fs = require('fs');

const vendor = [
  './node_modules/zone.js/dist/*.js',
  './node_modules/es6-shim/es6-shim.js',
  './node_modules/reflect-metadata/*.js',
  './node_modules/bootstrap/dist/**/*.*',
  './node_modules/prismjs/themes/**/*.css',
  './node_modules/prismjs/prism.js'
];

gulp.task('build:example', () => {
  return run(
    'clear:example-vendor',
    'build:example-vendor'
  );
});

gulp.task('clear:example-vendor', () => {
  return del('./example/vendor/');
});

gulp.task('build:example-vendor', () => {
  gulp.src(vendor, { base: './node_modules' })
    .pipe(gulp.dest('./example/vendor'));
})

gulp.task('build:example:inline-template', () => {
  gulp.src('./example/src/**/*.js', { base: './example/src' })
    .pipe(inlineNg2Template({ base: './example/src' }))
    .pipe(gulp.dest('./example/src'));
});

gulp.task('build:inline-template', () => {
  gulp.src('./dist/**/*.js', { base: './dist' })
    .pipe(inlineNg2Template({ base: './src' }))
    .pipe(gulp.dest('./dist'));
});