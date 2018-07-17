var gulp  = require('gulp'),
    gutil = require('gulp-util');
    clean = require('gulp-clean');
    zip = require('gulp-zip');


gulp.task('default', ['zip'], function() {
    return gutil.log('Gulp is running!')
});

gulp.task('copyangularbundle', ['clean'], function() {
    console.log("copying all the angular code:::");
    return gulp.src('GMESSAPP/dist/**/**').pipe(gulp.dest('dist/GMESSAPP/dist'));
});

gulp.task('copyenvconfig', function() {
    console.log("copying all the environment module:::");
    return gulp.src('environment/*/**').pipe(gulp.dest('dist/environment'));
});

gulp.task('clean', function () {
    console.log("cleaning the dist directory:::");
    return gulp.src('bundle/dist.zip', { read: false }).pipe(clean());
});

gulp.task('zip', ['copyangularbundle','copyenvconfig'], () =>
    gulp.src(['dist/**/**']).pipe(zip('dist.zip')).pipe(gulp.dest('bundle'))
);
