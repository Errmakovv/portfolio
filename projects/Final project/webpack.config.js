const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
         
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: "file-loader"
        
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:  'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};