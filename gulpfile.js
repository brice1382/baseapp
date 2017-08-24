var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('concat', function () {
    gulp.src([
        './app/core-services/_modules.js',
        './app/core-services/**/*.js'
    ])
        .pipe(concat('services.js'))
        .pipe(gulp.dest('./app/test'))
});

function isOnlyChanged(event) {
    return event.type === 'changed';
}

gulp.task('watch', function () {
    gulp.watch('./app/core-services/**/*.js', function (event) {
        if (isOnlyChanged(event)) {
            gulp.start('concat');
        }
    });
});