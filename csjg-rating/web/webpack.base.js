/**
 * webpack 配置
 */
var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var packagejson = require('./package.json')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:{
		css:__dirname+'/dev/sass/app.scss',
		app:__dirname+'/dev/js/app.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'[name].[chunkhash:8].js',
		chunkFilename: '[name].[chunkhash:8].js'
	},
	module:{
    // noParse: [/echarts/],
		loaders:[
			{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass-loader-once')
      },
      {
        test: /\.(tpl|html)$/,
        loader: 'html'
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
		    // excluding some local linked packages.
		    // for normal use cases only node_modules is needed.
		    exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
		    loader: 'babel'
        
      },
 
      // {
      //   // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      //   test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      //   loader: 'file?name=./static/fonts/[name].[ext]',
      // },
    
      {test: /\.json$/,loader: 'json-loader'},
      // {test: /\.(js|tag)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"}
		]
	},
	babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  resolve: {
    // extensions: ['', '.js', '.vue'],
    alias: {
      vuex_path: path.resolve(__dirname, './dev/js/vuex')
    }
  },
	plugins:[
		new ExtractTextPlugin('app.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'APP_ENV': JSON.stringify(process.env.NODE_ENV),
      'APP_VERSION': JSON.stringify(packagejson.version)
    }),

    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true, 
      dry: false
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
	]
};