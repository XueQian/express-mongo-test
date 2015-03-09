/**
 * Created by qxue on 3/7/15.
 */
//var gulp=require('gulp'),
//    gutil=require('gulp-util'),
//    uglify=require('gulp-uglify'),
//    concat=require('gulp-concat');

var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('lint_router', function() {
    return gulp.src('./router/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('lint_model',function(){
    return gulp.src('./model/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('lint_test',function(){
    return gulp.src('./test/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//
//gulp.task('js', function() {
//    gulp.src('./**/*.js')
//        .pipe(uglify())
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('./js'));
//});
//
gulp.task('default', ['lint_router','lint_model']);

gulp.watch('./**/*.js', ['lint_router','lint_model']);