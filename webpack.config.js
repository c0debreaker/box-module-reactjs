var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app', 'app.jsx'),
  build: path.join(__dirname, 'build'),
  indexHtml: path.join(__dirname, 'app', 'template', 'index.html')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: PATHS.indexHtml,
      title: 'Box Component in ReactJS',
      appMountId: 'app'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: path.join(__dirname, 'app'),
      query: {
        presets: 'es2015',
      },
    }, {
      // Test expects a RegExp! Note the slashes!
      test: /\.css$/,
      loaders: ['style', 'css'],
      // Include accepts either a path or an array of paths.
      include: PATHS.app
    },
    {
      test: /\.jsx$/,
      loader: 'babel',
      include: [
        path.resolve(__dirname),
        path.resolve(__dirname, 'app'),
        path.resolve(__dirname, 'app', 'components')
      ],
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }
    ]
  }
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
