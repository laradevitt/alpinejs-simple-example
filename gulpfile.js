const { watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');
const postcss = require('gulp-postcss');

sass.compiler = require('node-sass');

function cssTask() {
  return src('src/assets/scss/*.scss')
    .pipe(sass({importer: tildeImporter}))
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(dest('public/css'));
}

function jsTask() {
  return src('node_modules/alpinejs/dist/alpine.js')
    .pipe(dest('public/js/'));
}

exports.build = series(cssTask, jsTask);
exports.default = function() {
  watch(['src/assets/scss/*.scss', 'tailwind.config.js'], cssTask);
};
