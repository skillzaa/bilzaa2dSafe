var gulp = require('gulp');
var babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    del = require('del');

gulp.task('clean', function(){
  return del(['dest']);
});

gulp.task('cjs',['clean'], function(){
  return gulp.src(['src/*.js','src/**/*.js'])
   // .pipe(babel())
    .pipe(gulp.dest('dest/'));
});

gulp.task('default', ['cjs']);