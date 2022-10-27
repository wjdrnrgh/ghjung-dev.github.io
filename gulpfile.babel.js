import gulp from "gulp";
import gpug from "gulp-pug";
import gimg from "gulp-image";
import gwebserver from "gulp-webserver";
import ghpage from "gulp-gh-pages";
import gautoprefixer from "gulp-autoprefixer";
import gbro from "gulp-bro";
import gminiCSS from "gulp-csso";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import babelify from "babelify";
import del from "del";

const sass = gulpSass(dartSass);

const ROUTES = {
  pug: {
    watch: "src/views/**/*.pug",
    src: "src/views/*.pug",
    dest: "build",
  },
  scss: {
    watch: "src/**/*.scss",
    src: "src/scss/*.scss",
    dest: "build/css",
  },
  js: {
    watch: "src/**/*.js",
    src: "src/js/*.js",
    dest: "build/js",
  },
  img: {
    src: "src/img/*",
    dest: "build/img",
  },
  font: {
    src: [
      "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
      "node_modules/bootstrap-icons/font/fonts/*",
    ],
    dest: "build/fonts",
  },
};

//prepare
const clean = async () => {
  await del("build");
};

//liveServer
const devServer = () => {
  gulp.src("build").pipe(
    gwebserver({
      livereload: true,
      open: true,
    })
  );
};
const watch = () => {
  gulp.watch(ROUTES.img.src, img);
  gulp.watch(ROUTES.pug.watch, pug);
  gulp.watch(ROUTES.scss.watch, scss);
  gulp.watch(ROUTES.js.watch, js);
};

//assets
const pug = () => {
  return gulp.src(ROUTES.pug.src).pipe(gpug()).pipe(gulp.dest(ROUTES.pug.dest));
};
const scss = () => {
  return gulp
    .src(ROUTES.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      gautoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(gminiCSS())
    .pipe(gulp.dest(ROUTES.scss.dest));
};
const js = () => {
  return gulp
    .src(ROUTES.js.src)
    .pipe(
      gbro({
        transform: [
          babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(ROUTES.js.dest));
};
const img = () => {
  return gulp.src(ROUTES.img.src).pipe(gimg()).pipe(gulp.dest(ROUTES.img.dest));
};
const font = () => {
  return gulp.src(ROUTES.font.src).pipe(gulp.dest(ROUTES.font.dest));
};

//deploy
const deployment = async () => {
  await gulp.src("build/**/*").pipe(ghpage());
};

//series
const prepare = gulp.series([clean]);
const assets = gulp.series([img, font, pug, scss, js]);
const liveServer = gulp.parallel([devServer, watch]);

//scripts
export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, liveServer]);
export const deploy = gulp.series([build, deployment]);
