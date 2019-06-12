var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
var uglifyjs = require('uglify-js'); 
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);

gulp.task('minify-css', function(done){
  gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css'));
  done();
});

gulp.task('move-js', function(done){
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'));
  done();
});

gulp.task('htmlmin', function(done){
  gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist/'));
  done();
});

gulp.task('fonts', function(done){
  gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));
  done();
});

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinyPNG({
          key: 'bcASMkmwYqUILQOXKhkEzkTYPzdaV32x',
      }))
      .pipe(gulp.dest('dist/img/'));
      done();
});

gulp.task('compress', function (cb) {
  var options = {};
 
  pump([
      gulp.src('./src/js/*.js'),
      minify(options),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('default', gulp.parallel('minify-css', 'compress', 'fonts', 'htmlmin', 'tinypng', function(done) {

  done();
}));