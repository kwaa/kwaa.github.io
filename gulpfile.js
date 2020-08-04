let gulp = require('gulp');
let minifyInline = require('gulp-minify-inline');
let htmlmin = require('gulp-htmlmin');
let htmlclean = require('gulp-htmlclean');
let imagemin = require('gulp-imagemin');

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
// img
gulp.task('minify-img', function() {
    return gulp
        .src('./public/p/**/*.*')
        .pipe(
            imagemin([
                imagemin.gifsicle({ optimizationLevel: 3 }),
                imagemin.mozjpeg({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 7 }),
                imagemin.svgo({ plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]})],
                { verbose: true }
            )
        )
        .pipe(gulp.dest('./public/p'))
});
// task
gulp.task('default', gulp.series(
    'minify-html','minify-inline'
));