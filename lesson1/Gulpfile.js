var gulp = require('gulp'),
    sass = require('gulp-sass');

var config = {
    scssDir: './assets/scss',
    cssDir: './assets/css'
};

gulp.task('style', function () {
    gulp.src(config.scssDir + '/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(config.cssDir))
});