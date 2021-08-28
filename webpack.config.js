require('dotenv').config()
// const path = require('path');
const process = require('process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const environment = process.env.NODE_ENV
const devMode = environment === "development"

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: devMode ? "[name].bundle.css" : "[name].[contenthash:16].bundle.css",
    chunkFilename: devMode ? "[id].css" : "[id].[contenthash:16].css",
  }),
];

const cssLoaders = [
	{
		loader: MiniCssExtractPlugin.loader,
		options: {},
	},
	{
		loader: "css-loader",
		options: {
			sourceMap: true,
			importLoaders: 1
		}
	},

]

if (!devMode) {
	cssLoaders.push({
		loader: "postcss-loader",
		options: {
			postcssOptions: {
				plugins: [
					[
						"postcss-preset-env"
					],
				],
			},
		}
	})
}

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
        test: /\.(js)$/,
        enforce: "pre",
        use: ["source-map-loader"],
			},
			{
        test: /\.css$/i,
				use: cssLoaders,
      },
			{
        test: /\.scss$/i,
				use: [...cssLoaders,
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							implementation: require.resolve("sass")
						}
					}
				]
      }
		]
	},
	plugins: [new HtmlWebpackPlugin(),
		...plugins
	],
	ignoreWarnings: [/Failed to parse source map/],
}

module.exports = config;
