'use strict';

var nunjucksRender = require('gulp-nunjucks-render'),
gulp = require('gulp'),
data = require('gulp-data'),
plumber = require('gulp-plumber'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
sass = require('gulp-sass'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
postcss = require('gulp-postcss'),
del = require('del'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
scsslint = require('gulp-scss-lint'),
uglify = require('gulp-uglify'),
jshint = require('gulp-jshint'),
concat = require('gulp-concat');

var basePaths = {
	src: './app/',
	dist: './dist/'
}

var srcPaths = {
	styles: basePaths.src + 'assets/stylesheets/**/*.scss',
	nunjucks: basePaths.src + 'pages/**/*',
	images: basePaths.src + 'assets/images/',
  fonts: basePaths.src + 'assets/fonts/',
  scripts: basePaths.src + 'assets/scripts/*.js',
  scriptsVendor: [
  'bower_components/jquery/dist/jquery.js',
  basePaths.src + 'assets/scripts/vendor/jquery.tablesorter.min.js',
  ]
};

var distPaths = {
	styles: basePaths.dist + 'assets/stylesheets/',
	html: basePaths.dist,
	images: basePaths.dist + 'assets/images',
  fonts: basePaths.dist + 'assets/fonts',
  scripts: basePaths.dist + 'assets/scripts'
};


var processors = [autoprefixer({browsers: [
	'last 5 versions',
	'ie >= 8',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
	]})];


/* Lint, compile and minify styles */
gulp.task('css', function(){
	gulp.src(srcPaths.styles)
	.pipe(plumber())
	.pipe(scsslint({
		'config': '.scss-lint.yml',
  }))
	.pipe(scsslint.failReporter())
	.pipe(sourcemaps.init())
	.pipe(sass({
		errLogToConsole: true,
		outputStyle: 'expanded',
		sourceComments: false
  }).on('error', sass.logError))
	.pipe(postcss(processors))
	.pipe(gulp.dest(distPaths.styles))
	.pipe(rename({ suffix: '.min'}))
	.pipe(cssnano())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(distPaths.styles))
	.pipe(reload({stream: true}));
});


/* Compile nunjucks templates and inject data from json */
gulp.task('nunjucks', function(){
	gulp.src(srcPaths.nunjucks + '.+(html|nj|nunjucks)')
		// Renders template with nunjucks
		.pipe(plumber())
		.pipe(data(function(){
			return require('./app/data.json')
   }))
		.pipe(nunjucksRender({
			path: ['app/templates']
   }))
		// output files in app folder
		.pipe(gulp.dest(distPaths.html))
  });

/* Clean the dist folder */
gulp.task('clean', function(){
	del([
		basePaths.dist + '**/**'
		]);
});

/* BrowserSync server */
gulp.task('browser-sync', function()  {
	browserSync.init(basePaths.build, {
		server: {
			baseDir: './dist/'
   }
 });
});

/* Simply copy images from src to dist */
gulp.task('images', function(){
	gulp.src(srcPaths.images + '**/**')
	.pipe(gulp.dest(distPaths.images));
});

/* Simply copy fonts from src to dist */
gulp.task('fonts', function(){
  gulp.src(srcPaths.fonts + '**/**')
  .pipe(gulp.dest(distPaths.fonts));
});

/* Concat vendor scripts */
gulp.task('scriptsVendor', function(){
	gulp.src(srcPaths.scriptsVendor)
	.pipe(plumber())
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest(distPaths.scripts))
	.pipe(rename({ suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest(distPaths.scripts))
});

/* Lint and minify scripts */
gulp.task('scripts', function(){
	gulp.src(srcPaths.scripts)
	.pipe(plumber())
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'))
	.pipe(sourcemaps.init())
	.pipe(rename('app.js'))
	.pipe(gulp.dest(distPaths.scripts))
	.pipe(rename({ suffix: '.min'}))
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(distPaths.scripts))
	.pipe(reload({stream: true}));
});

/* Watch task */
gulp.task('watch', function(){
	gulp.watch(srcPaths.styles, ['css']);
	gulp.watch([srcPaths.images + '**/**'], ['images', reload]);
  gulp.watch([srcPaths.fonts + '**/**'], ['fonts', reload]);
  gulp.watch(srcPaths.nunjucks, ['nunjucks', reload]);
  gulp.watch(srcPaths.scripts, ['scripts']);
  gulp.watch(basePaths.src + 'templates/**/*', ['nunjucks', reload]);
});

/* Build */
gulp.task('build', ['css', 'images', 'fonts', 'nunjucks', 'scripts', 'scriptsVendor']);

/* Build and watch */
gulp.task('default', ['build', 'watch', 'browser-sync']);
