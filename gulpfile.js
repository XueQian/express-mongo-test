'use strict';

var gulp   = require('gulp');

var jshint = require('gulp-jshint');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
    return gulp.src(['./router/**/*.js','./model/*.js','./test/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function (cb) {
    gulp.src(['./router/**/*.js','./model/*,js'])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src(['test/**/*.js'])
                .pipe(mocha())
                .pipe(istanbul.writeReports())
                .on('end', cb);
        });
});

gulp.task('default', ['lint','test']);

gulp.watch('./**/*.js', ['lint','test']);