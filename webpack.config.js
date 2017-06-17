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
		overlay: {
			warnings: true,
			errors: true
		}
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				include: path.resolve(__dirname, 'src', 'app'),
				test: /\.js$/,
				loader: 'eslint-loader'
			}
		]
	}

};
