const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const csso = require('postcss-csso');

const processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    require('lost'),
    mqpacker({

    }),
    csso
];

gulp.task('sass', function () {
    return gulp
        .src('app/sass' + '/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed', // nested, expanded, compact, compressed
            precision: 5
        }))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/sass' + '/**/*.{sass,scss}', ['sass']);
});

