// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var browserSync = require('browser-sync').create();

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//SASS
gulp.task('sass', function() {
  return gulp.src('app/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//Minify css
//gulp.task('minify-css', function() {
//    return gulp.src('dist/css/style.css')
//        .pipe(cssnano())
//        .pipe(gulp.dest('dist/css/style.min.css'));
//});

// Watch Files For Changes
gulp.task('watch',['browserSync', 'sass'], function() {
    gulp.watch('app/js/*.js', ['lint', 'scripts']);
    gulp.watch('app/css/*.scss', ['sass']);
    gulp.watch('app/tpl/*.html', ['minify-tpl']);
    gulp.watch('app/index.html', ['minify-html']);
});

//minify html
gulp.task('minify-html', function() {
  return gulp.src('app/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('dist'));
});

//minify tpl
gulp.task('minify-tpl', function() {
  return gulp.src('app/tpl/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('dist'));
});

//copy bower_components
gulp.task('copy-bower', function(){
  gulp.src('bower_components/**')
  .pipe(gulp.dest('dist/bower_components'));
});

// Default Task
gulp.task('default', ['lint', 'minify-html', 'minify-tpl', 'copy-bower', 'scripts', 'watch']);
