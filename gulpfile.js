var gulp =          require('gulp'),
    jade =          require('gulp-jade'),
    sass =          require('gulp-sass'),
    uglify =        require('gulp-uglify'),
    watch =         require('gulp-watch'),
    bulkSass =      require('gulp-cssimport'),
    autoprefixer =  require('gulp-autoprefixer'),
    webserver =     require('gulp-webserver'),
    plumber =       require('gulp-plumber'),
    paths = {
                jade: ['public/app/**/*.jade', 'index.jade'],
                sass: ['public/styles/main.sass'],
                scripts: ['public/app/**/*.js']
    };


gulp.task('jade', function() {
    return gulp.src(paths.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/productionFiles/html'))
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(bulkSass())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('./public/styles'))
});

gulp.task('compress', function() {
    return gulp.src(paths.scripts)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./public/productionFiles/minifiedJS'));
});

gulp.task('webserver', function() {
    gulp.src('./public')
    .pipe(webserver({
        livereload: true,
        open: true,
        port: 8080,
        fallback: 'index.html'
    }));
});

gulp.task('watch', function() {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch('./public/styles/modules/**/*.sass', ['sass']);
    gulp.watch(paths.scripts, ['compress']);
});


gulp.task('default', ['jade', 'sass', 'compress', 'watch', 'webserver']);
