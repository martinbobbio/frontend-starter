const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path:path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        include: /(src)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
                  [
                      '@babel/preset-env',
                      {
                          "useBuiltIns": "usage",
                          "corejs": 3
                      }
                  ],
                  ['@babel/preset-typescript', { allowNamespaces: true }]
              ],
              plugins: [
                  '@babel/plugin-syntax-dynamic-import'
              ]
          }
      }]
    },
    {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 10000,
            }
        }]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin()
    ],
  }
}