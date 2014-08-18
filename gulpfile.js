// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('public/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/js/*.js', ['lint']);
    gulp.watch('public/stylesheets/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'watch']);