const gulp = require('gulp');

const gulpCopy = require('gulp-copy');
const sourceFiles = ['/*', 'css/normalize.css'];
const destination = '/dist/';


gulp.task('copy-normalize-css', function() {
    return gulp.src('app/css/normalize.css')
    .pipe(gulp.dest('dist/css'));
  });


gulp.task('copy', ['copy-normalize-css', 'fonts'], function() {
    return gulp.src('app/*')
    .pipe(gulp.dest('dist/'));
  });