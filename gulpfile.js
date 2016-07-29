const path = require('path');
const gulp = require('gulp');
const run = require('run-sequence');
const del = require('del');
const inlineNg2Template = require('gulp-inline-ng2-template');
const ghPages = require('gh-pages');

const inlineNg2TemplateConfig = {
  useRelativePaths: true,
  target: 'es5'
};

gulp.task('build:core:inline-template', () => 
  gulp.src('./src/**/*.js', { base: './src' })
    .pipe(inlineNg2Template(inlineNg2TemplateConfig))
    .pipe(gulp.dest('./src')));

gulp.task('build:components:inline-template', () => 
  gulp.src('./src/components/**/*.js', { base: './src/components' })
    .pipe(inlineNg2Template(inlineNg2TemplateConfig))
    .pipe(gulp.dest('./src/components')));

gulp.task('build:inline-template', (done) => 
  run([
    'build:core:inline-template',
    'build:components:inline-template'
  ],
  done));

gulp.task('clear', () => 
  del([
    './components',
    './core',
    './index.{js,js.map,d.ts}',
    './components.{js,js.map,d.ts}',
    './example-build'
  ]));

gulp.task('build:move', () =>
  gulp.src([
    './src/**/*.{js,js.map,d.ts}',
    '!./src/typings.d.ts'
  ], { base: './src' })
    .pipe(gulp.dest('./')));

gulp.task('build:clear', () =>
  del([
    './src/**/*.{js,js.map,d.ts}',
    '!./src/typings.d.ts'
  ]));

gulp.task('after-build', (done) =>
  run(
    ['build:core:inline-template',
     'build:components:inline-template'],
    'build:move',
    'build:clear',
    done
  ));