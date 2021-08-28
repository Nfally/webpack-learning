const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const process = require('process')

const environment = process.env.ENVIRONMENT === 'local' ? 'development' : 'production'

const config = {
	mode: environment,
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
        test: /\.(js|css)$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
		]
	},
	plugins: [new HtmlWebpackPlugin()],
	ignoreWarnings: [/Failed to parse source map/],
}

export default config;
