var gulp = require('gulp'),
del = require('del'),
exec = require('gulp-exec');

gulp.task('deleteDistFolder', function() {
    return del("./docs");
});

gulp.task('copyGeneralFiles', ['minCss'], function() {
    gulp.src('./index.html')
        .pipe(gulp.dest("./docs"));

    gulp.src('./img/**/*')
        .pipe(gulp.dest('./docs/img'));

    var cssPathsToCopy = [
        './css/main.css',
    ];

    return gulp.src(cssPathsToCopy)
        .pipe(gulp.dest("./docs/css"));
});

gulp.task('minCss', ['deleteDistFolder'], function() {
    exec('npm run build:css');  
});

gulp.task('build', ['deleteDistFolder', 'minCss', 'copyGeneralFiles']);