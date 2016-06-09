var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cssnano = require('gulp-cssnano'),
  argv = require('yargs').argv,
  gulpif = require('gulp-if');

var isProduction;

if (argv.prod) {
  isProduction = true;
} else {
  isProduction = false;
}

var config = {
  scssDir: './assets/scss',
  cssDir: './assets/css'
};

gulp.task('style', function () {
  gulp.src(config.scssDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulpif(isProduction, cssnano(), sourcemaps.write('maps')))
    .pipe(gulp.dest(config.cssDir))
});

gulp.task('watch', function() {
  gulp.watch(config.scssDir + '/**/*.scss', ['style']);
});
