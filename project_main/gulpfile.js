const {src, dest, parallel, series, watch} = require('gulp');
const brwSync = require('browser-sync').create();
const sass = require('gulp-sass');
const preprocess = require('preprocess');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');//все что подключаем в терминале, через конст поделючаем в проект
const newer = require('gulp-newer');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const minifyJs = require('gulp-uglify');

function browserSync() {
    brwSync.init({
        server: {baseDir: 'app/'},
        notify: false,
        online: true,
    });
}

function styles() {
    return src([
        'app/styles/main.scss',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(sass())
    .pipe(autoprefixer({
        cascade:true,
        overrideBrowserlist:["last 5 versions"]

    }))
    .pipe(concat('main.min.css'))
    .pipe(dest('app/styles/css'))
    .pipe(brwSync.stream())
}

function watching() {
    watch('app/styles/**/*.scss', styles);
    watch('app/index.html').on('change',brwSync.reload)
}
function minimization(){
    return src('app/images/*')
    .pipe(newer('img-opt')) //проверяем картинки в папке, которые уже минимизированы
    .pipe(imagemin())
    .pipe(dest('app/img-opt'))
}

function cleaning(){
    return del('app/img-opt/*', {force:true})
}

function build() {
    return src([
        'app/img-opt/*',
        'app/styles/css/*',
        'app/**/*.html'
    ], {base:'app'})
    .pipe(dest('dist'))
}

function minimizationCss() {
    return src('app/styles/*.scss')
    .pipe(minifyCss())
    .pipe(dest('./mincss'));
}

function minimizationJs () {
    return src('app/styles/*.js')
    .pipe(minifyJs())
    .pipe(dest('./minjs'));
}


exports.brwSync = browserSync;
exports.styles = styles;
exports.watch = watching;
exports.minimg = minimization;
exports.cleaning = cleaning;
exports.reopimg = series(cleaning, minimization);
exports.build = build;
exports.minimizationCss = minimizationCss;
exports.minimizationJs = minimizationJs;

exports.default = parallel(styles, browserSync, watching, minimizationCss, minimizationJs);