// gulpfile.js
const { gulp,src, dest } = require('gulp');
const esmToCjs = require("gulp-esm-to-cjs");
//const uglify = require('gulp-uglify');
//const cssnano = require('gulp-cssnano');
// const autoprefixer = require('gulp-autoprefixer');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const webpack = require('webpack-stream');
// const babel = require('gulp-babel');
// const mode = require('gulp-mode')();
function testFiles(cb) {
    return src('src/**/*.js')
      .pipe(dest('testsrc/'));
    cb();
}

//exports.copy = copy;


 
function convert() {
  return src('src/**/*.js')
    .pipe(esmToCjs())
    .pipe(dest(('testsrc/')));
}
module.exports.convert = convert;
  
