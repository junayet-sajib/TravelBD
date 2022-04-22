let mix = require('laravel-mix');

mix.sass('src/scss/main.scss', 'dist/css')
.options({
	processCssUrls:false
});