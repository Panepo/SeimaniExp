require! {
	"path": path
	"webpack": webpack
}

module.exports = {
	devtool: "sourcemap"
	entry: [
		#'webpack-hot-middleware/client'
		"./src_flux/app.ls"
	]
	output: {
		path: path.join(__dirname, 'build')
		filename: 'bundle.js'
	}
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin()
		new webpack.HotModuleReplacementPlugin()
		new webpack.NoErrorsPlugin()
	]
	module: {
		loaders: [
			{
				test: /\.js$/
				loaders: [ "react-hot", "babel" ]
				include: path.join(__dirname, 'src_flux')
			}
			{
				test: /\.ls$/
				loaders: [ "react-hot", "livescript" ]
				include: path.join(__dirname, 'src_flux')
			}
			{
				test: /\.json/
				loaders: [ "json" ]
				include: path.join(__dirname, 'raw')
			}
			{
				test: /\.(css|scss)$/
				loaders: [ 'style', 'css', 'sass' ]
				include: path.join(__dirname, 'css')
			}
			{
				test: /\.(png|jpg)$/
				loaders: [ 'url-loader' ]
				include: path.join(__dirname, 'image')
			}
		]
	}
	node: {
		fs: "empty"
	}
}
