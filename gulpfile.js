let gulp = require('gulp');
let minifyInline = require('gulp-minify-inline');
let htmlmin = require('gulp-htmlmin');
let htmlclean = require('gulp-htmlclean');

// html
gulp.task('minify-html', function() {
    return gulp
        .src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// inline
gulp.task('minify-inline', function() {
    return gulp
        .src('./public/**/*.html')
        .pipe(minifyInline())
        .pipe(gulp.dest('./public'))
});
// task
gulp.task('default', gulp.series(
    'minify-html','minify-inline'
));