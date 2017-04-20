var gulp = require('gulp');
var gulpCleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    return gulp.src("./node_modules/onsenui/css/onsenui.css")
        .pipe(gulpCleanCSS({
            processImport: true,
            target: './build',
            rebaseTo: './build',
            rebase: true
        }))
        // Write the file already to the right place, so rebaser knows from where the relative paths are.
        .pipe(gulp.dest('./build'))
});