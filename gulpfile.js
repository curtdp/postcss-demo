var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');



gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(postcss([ cssnext({browsers: ['last 2 versions']}) ]))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('serve', function() {
  gulp.watch('src/css/*.css', ['css',])
})
