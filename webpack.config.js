const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, './src/')
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                  [
                      '@babel/preset-env',
                      {
                          "targets": {
                            "browsers": ["last 3 versions", "ie >= 11"]
                          },
                          "debug": true
                      }
                  ]
              ],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
      proxy: {
        '/api':  'http://localhost:3000',
      },
    },
    devtool: 'source-map',
    mode: 'development'
  }