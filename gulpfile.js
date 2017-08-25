var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('concat', function () {
    gulp.src([
        './app/core-services/_modules.js',
        './app/core-services/**/*.js'
    ])
        .pipe(concat('services.js'))
        .pipe(gulp.dest('./app/dist'))
});

function isOnlyChanged(event) {
    return event.type === 'changed';
}

gulp.task('build', function () {
    gulp.src([
        './app/views/_module.js',
        './app/views/**/_module.js',
        './app/views/**/*.js',
        '!./app/views/**/*_test.js'
    ])
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('./app/dist/js'))
});

gulp.task('watch', function () {
    gulp.watch([
        './app/core-services/**/*.js',
        './app/views/**/*.js'
    ], function (event) {
        if (isOnlyChanged(event)) {
            gulp.start(['concat', 'build']);
        }
    });
});