const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function compilaSass() {
  return gulp
    .src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/styles'))
}

function comprimeImages() {
  return gulp
    .src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function watch() {
  gulp.watch('./src/styles/**/*.scss', compilaSass)
  gulp.watch('./src/images/**/*', comprimeImages)
}

exports.default = gulp.parallel(compilaSass, comprimeImages)
exports.watch = watch
