const gulp = require('gulp'),
    watch = require('gulp-watch'),    
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');
    babel = require('gulp-babel');
    
////////----CHEMBR--COMPILE------

// gulp.task('pure',function(){
//    return gulp.src('./chembr/pure/*.js')
//    .pipe(plumber())
//    .pipe(concat('1pure.js'))
//     .pipe(plumber.stop())
//     .pipe(gulp.dest('./src'));
// });

///////////////////////////////////////

gulp.task('box',function(){
    return gulp.src('./src/*.js')
    .pipe(plumber())
    .pipe(concat('box.js'))
     .pipe(plumber.stop())
     .pipe(gulp.dest('./src'));
 });


gulp.task('default',function(){
  gulp.watch(['./src/*.js']
  ,function(){
//   gulp.start('painter');   
   gulp.start('box');   
  }) ;   
});//---watch ends

///////////////////////////////////////   
