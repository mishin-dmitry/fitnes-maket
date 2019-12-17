var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

function css_style(done) {
  gulp
    .src("./scss/**/*")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed"
      })
    )
    .on("error", console.error.bind(console))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());

  done();
}

function watchFiles() {
  gulp.watch("./scss/style.scss", css_style);
  gulp.watch("./**/*", browserReload);
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./",
      port: 3000
    }
  });
  done();
}

gulp.task("default", gulp.parallel(watchFiles, sync));
gulp.task(css_style);
//gulp.series(функции) - для вызова нескольких функций
