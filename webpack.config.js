var path = require('path');
var webpack = require('webpack');
var yargs = require('yargs');

var optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize;
var dir_src = path.resolve(__dirname, 'src');
var dir_lib = path.resolve(__dirname, 'lib');

module.exports = {
	devtool: optimizeMinimize ? 'source-map' : null,
	entry: {
		main: [path.resolve(dir_src, 'index.js')]
	},
	output: {
		path: dir_lib,
		filename: 'index.js'
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
		],
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	eslint: {
		configFile: path.resolve(__dirname, '.eslintrc')
	}
};
