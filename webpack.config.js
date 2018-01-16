const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');
const args = require('yargs').argv;
const CopyWebpackPlugin = require('copy-webpack-plugin');

let styleLoader = ['style-loader', 'css-loader', 'sass-loader'];

const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

const plugins = [
  new htmlPlugin({
    template: 'index.html'
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
  new webpack.HotModuleReplacementPlugin(),
  new textPlugin({
    filename: 'main.css',
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component'],
    PropTypes: 'prop-types'
  })
  // ,
  // new CopyWebpackPlugin([
  //   ...images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' })),
  //   { from: 'assets', to: 'assets' }
  // ])
];

module.exports = {
  entry: {
    main: './app.js',
    vendor: ['react', 'react-dom']
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     emitWarning: true
      //   }
      // },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015'],
            plugins: ['transform-class-properties', 'transform-decorators-legacy']
          },
        }
      },

      {
        test: /\.s?css$/,
        use: textPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })

      }
    ],
  },

  plugins,

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9000,
    historyApiFallback: true
  }
};
