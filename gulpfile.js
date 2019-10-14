const gulp = require('gulp');
const scss = require('gulp-sass');

gulp.task('scss',function(){
    return gulp.src('./scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'));
});
gulp.task("watch",function(){
    gulp.watch('scss/style.scss',gulp.series('scss'));
})