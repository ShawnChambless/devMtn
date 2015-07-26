var gulp =      require('gulp'),
    jade =      require('gulp-jade'),
    sass =      require('gulp-sass'),
    uglify =    require('gulp-uglify'),
    watch =     require('gulp-watch'),
    webserver = require('gulp-webserver'),
    paths = {
                jade: ['public/app/**/*.jade', 'index.jade'],
                sass: ['public/styles/main.sass'],
                scripts: ['public/app/**/*.js']
    };


gulp.task('jade', function() {
    return gulp.src(paths.jade)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/productionFiles/html'))
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./public/productionFiles/styles'))
});

gulp.task('compress', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('./public/productionFiles/minifiedJS'));
});

gulp.task('webserver', function() {
    gulp.src('./')
    .pipe(webserver({
        livereload: true,
        open: true,
        port: 8080,
        fallback: 'index.html'
    }));
});

gulp.task('watch', function() {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.scripts, ['compress']);
});


gulp.task('default', ['jade', 'sass', 'compress', 'watch', 'webserver']);
