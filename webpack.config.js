/* eslint-disable */
const path = require('path');

// Can be an object or a function which exports an object
module.exports = {

	entry: './src/app/main.js',

	output: {
		filename: 'app-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	devtool: 'cheap-eval-source-map',

	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		compress: true,
		historyApiFallback: true,
		overlay: {
			warnings: false,
			errors: true
		}
	},

	resolve: {
		modules: ['node_modules', 'src/app']
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				include: path.resolve(__dirname, 'src', 'app'),
				test: /\.js$/,
				loader: 'eslint-loader'
			},
			{
				include: path.resolve(__dirname, 'src', 'app'),
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				include: path.resolve(__dirname, 'src', 'app'),
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	}

};
