const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');

gulp.task('webpack', () => {
    gulp.src('./app/js/app.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('webpack:watch', () => {
    gulp.src('./app/js/app.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./app/tmp/js'));
    
    gulp.watch('app/js/*.js').on('change', function(){
    gulp.src('./app/js/app.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./app/tmp/js'));
    }
);
});