var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ],
  //add from js
  devServer:{
  	proxy:[{
  		content:['/api'],
  		target:'localhost://tp5/public/index.php',
  		secure:false
  	}]
  }
})

/**
 * @description 多入口
 * add from js
 */
//var pages = utils.getEntries('./src/module/**/*.html');
//for (var page in pages) {
//	var conf = {
//		filename:page+'.html',
//		template:page[page],
//		inject:true,
//		excludeChunks:Object.keys(pages).filter(item => {
//			return (item != page)
//		})
//	}
//	module.exports.plugins.push(new HtmlWebpackPlugin(conf))
//}
