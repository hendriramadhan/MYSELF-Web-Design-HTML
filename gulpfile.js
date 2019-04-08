var gulp = require("gulp"),
    sass= require("gulp-sass"),
    autoprefixer= require("gulp-autoprefixer"),
    imagemin = require('gulp-imagemin');

gulp.task("sass",function(){
    return gulp.src("./css/**/*.scss")
    .pipe(sass().on('error',sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
})

gulp.task('imagemin', () =>
    gulp.src('images/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
        .pipe(gulp.dest('images/new'))
);