const { src, dest, parallel, series, watch } = require('gulp');
// Node Packages
const gulp = require('gulp');
const pump = require('pump');
const del = require('del');
const gulpSourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gulpSass = require('gulp-sass');
gulpSass.compiler = require('sass');
const fs = require('fs');
const replace = require('gulp-replace');
const gulpStylelint = require('gulp-stylelint');
const cssnano = require('gulp-cssnano');
//Webpack config
const webpack 		= require('webpack-stream');
// Browser Sync
const browserSync = require('browser-sync').create();

//package.json
const pckg = JSON.parse(fs.readFileSync('./package.json'));

// Paths for reuse
const exportPath = '**/*';
const srcPath = (file, watch = false) => {
  if (file === 'scss' && watch === true) return `${pckg.paths.src.scss}**/*.scss`;
  if (file === 'scss-public' && watch === false) return `${pckg.paths.src.scss}style.scss`;
  if (file === 'js') return `${pckg.paths.src.js}**/*.js`;
  if (file === 'img') return `${pckg.paths.src.img}**/*.{png,jpeg,jpg,svg,gif}`;
  if (file === 'fonts') return `${pckg.paths.src.fonts}**/*`;
  console.error('Unsupported file type entered into Gulp Task Runner for Source Path');
};

const distPath = (file, dest = 'public', serve = false) => {
  if (['dist'].includes(dest) && file === 'js') return pckg.paths.wp.js;
  if (['dist'].includes(dest) && file === 'img') return pckg.paths.wp.img;
  if (['dist'].includes(dest) && file === 'fonts') return pckg.paths.wp.fonts;
  if (['wp'].includes(dest) && file === 'js') return pckg.paths.wp.js;
  if (['wp'].includes(dest) && file === 'img') return pckg.paths.wp.img;
  if (['wp'].includes(dest) && file === 'fonts') return pckg.paths.wp.fonts;
  console.error('Unsupported file type entered into Gulp Task Runner for Dist Path');
};

/**
 * Cleaning Tasks
*/
// Clean Styles Task
const cleanStyles = (mode) => (done) => {
    return ['development', 'production'].includes(mode) ? del([`style.css`, `style.css`]) : done();
  };

// Clean Scripts Task
const cleanScripts = (mode) => (done) => {
  return ['development', 'production'].includes(mode) ? del([distPath('js','dist'), distPath('js','wp')]) : done();
};

// Clean Images Task
const cleanImages = (mode) => (done) => {
  return ['development', 'production'].includes(mode) ? del([distPath('img', 'dist'), distPath('img','wp')]) : done();
};

// Clean Fonts Task
const cleanFonts = (mode) => (done) => {
  return ['development', 'production'].includes(mode) ? del([distPath('fonts', 'dist'), distPath('fonts','wp')]) : done();
};

/**
 * Building Tasks
*/
// Build Styles Task
const buildStyles = (mode) => (done) => {
  let outputStyle;
  let version = (mode === 'development') ? new Date().getTime() / 1000 : pckg.version;
  if (mode === 'production') outputStyle = 'compressed';
  else outputStyle = undefined;

  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('scss-public')),
    replace('VERSION', version),
    replace('NAME', pckg.themename),
    replace('URI', pckg.themeuri),
    replace('AUTHOR', pckg.author),
    replace('AUTHORURI', pckg.authoruri),
    replace('DESCRIPTION', pckg.description),
    gulpStylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      }),
    gulpSourcemaps.init({ loadMaps: true }),
    gulpSass({ outputStyle }),
    autoprefixer({ grid: true }),
    cssnano(),
    gulpSourcemaps.write('./'),
    gulp.dest('./'),
    browserSync.stream(),
  ], done) : done();
};

// Build Fonts Tasks
const buildFonts = (mode) => (done) => {
  pump([
    gulp.src(srcPath('fonts')),
    gulp.dest(distPath('fonts','dist')),
  ], done);
};

// Build Images Task
const buildImages = (mode) => (done) => {
  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('img')),
    gulp.dest(distPath('img','dist')),
    browserSync.stream(),
  ], done) : done();
};

// Build Scripts Task
const buildScripts = (mode) => (done) => {
  let streamMode = require(`./webpack/config.${mode}.js`);

  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('js')),
    webpack(streamMode),
    gulp.dest(distPath('js','dist')),
    browserSync.stream(),
  ], done) : done();
};

/**
 * Generic Task for all Main Gulp Build/Export Tasks
*/
// Generic Task
const genericTask = (mode, context = 'building') => {
  // Combine all booting tasks into one array!
  const allBootingTasks = [
    Object.assign(cleanFonts(mode), { displayName: `Booting Fonts Task: Clean` }),
    Object.assign(buildFonts(mode), { displayName: `Booting Fonts Task: Build` }),
    // Object.assign(cleanImages(mode), { displayName: `Booting Images Task: Clean` }),
    // Object.assign(buildImages(mode), { displayName: `Booting Images Task: Build` }),
    Object.assign(cleanStyles(mode), { displayName: `Booting Styles Task: Clean` }),
    Object.assign(buildStyles(mode), { displayName: `Booting Styles Task: Build` }),
    Object.assign(cleanScripts(mode), { displayName: `Booting Scripts Task: Clean` }),
    Object.assign(buildScripts(mode), { displayName: `Booting Scripts Task: Build` }),
  ];

  // Browser Loading & Watching
  const browserLoadingWatching = (done) => {
    // Set up BrowserSync server
    browserSync.init({
      proxy: 'https://dxdy.site',
      open: true,
      logLevel: "debug",
      logConnections: true,
    });

    // Watch - Styles
    gulp.watch(srcPath('scss', true))
      .on('all', gulp.series(
        Object.assign(cleanStyles(mode), { displayName: `Watching Styles Task: Clean` }),
        Object.assign(buildStyles(mode), { displayName: `Watching Styles Task: Build` }),
      ));

    // Watch - Images
    gulp.watch(srcPath('img', true))
      .on('all', gulp.series(
        Object.assign(cleanImages(mode), { displayName: `Watching Images Task: Clean` }),
        Object.assign(buildImages(mode), { displayName: `Watching Images Task: Build` }),
      ));

    // Watch - Fonts
    gulp.watch(srcPath('fonts', true))
      .on('all', gulp.series(
        Object.assign(cleanFonts(mode), { displayName: `Watching Fonts Task: Clean` }),
        Object.assign(buildFonts(mode), { displayName: `Watching Fonts Task: Build` }),
      ));

    // Watch - Scripts
    gulp.watch(srcPath('js', true))
      .on('all', gulp.series(
        Object.assign(cleanScripts(mode), { displayName: `Watching Scripts Task: Clean` }),
        Object.assign(buildScripts(mode), { displayName: `Watching Scripts Task: Build` }),
      ));
  };

  // Returning Tasks based on Building Context
  if (context === 'building') {
    return [
      ...allBootingTasks,
      Object.assign(browserLoadingWatching, { displayName: `Browser Loading & Watching Task` }),
    ];
  }

  // Returning Tasks based on Staging Context
  if (context === 'staging') {
    return [
      ...allBootingTasks
    ];
  }


  // No Side-Effects Please
  return undefined;
};

/**
 * Main Gulp Build/Export Tasks that are inserted within `package.json`
*/
//compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('./src/scss/**/*.scss')
  .pipe(gulpSourcemaps.init())
  // 2. pass that file through sass compiler
  .pipe(gulpSass())
  .pipe(gulpSourcemaps.write('./maps'))
  // 3. where do I save the compiles CSS?
  .pipe(gulp.dest('./src/css'))
}

// Watch files
function watchFiles() {
  watch('./src/scss/*', style);
  // watch('./src/js/*', js);
  // watch('./src/img/*', img);
}

exports.watch = parallel(watchFiles);
exports.style = style;

// Default (`gulp`) => Production
gulp.task('default', gulp.series(...genericTask('production', 'staging')));

// Dev (`gulp dev`) => Development
gulp.task('dev', gulp.series(...genericTask('development', 'building')));
