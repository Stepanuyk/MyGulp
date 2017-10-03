const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');

gulp.task('webpack-dist', () => {
    gulp.src('./app/js/app.js')
        .pipe(webpackStream(
            module.exports = {
                output: {
                  filename: 'app.min.js',
                },
                module: {
                  rules: [
                    {
                      test: /\.(js|jsx)$/,
                      exclude: /(node_modules)/,
                      loader: 'babel-loader',
                      query: {
                        presets: [
                          ['latest', { modules: false }],
                        ],
                      },
                    },
                  ],
                },
                plugins: [
                    new webpack.optimize.UglifyJsPlugin({
                      compress: { warnings: false }
                    })
                  ]
              }            
        ), webpack)
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('webpack-app', () => {
    gulp.src('./app/js/app.js')
    .pipe(webpackStream(
        module.exports = {
            output: {
              filename: 'app.min.js',
            },
            module: {
              rules: [
                {
                  test: /\.(js|jsx)$/,
                  exclude: /(node_modules)/,
                  loader: 'babel-loader',
                  query: {
                    presets: [
                      ['latest', { modules: false }],
                    ],
                  },
                },
              ],
            },
          }            
    ), webpack)
        .pipe(gulp.dest('./app/js'));
});

gulp.task('webpack:watch', ['webpack-app'], () => {

    gulp.watch('./app/js/app.js', ['webpack-app']);
});