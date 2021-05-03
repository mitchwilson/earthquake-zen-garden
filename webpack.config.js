const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const data = require("./data.json");

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  // devServer: {
  //   before: function(app) {
  //     app.get('/api', async function(req, res) {
  //       try {
  //         const queryURL = req.query.q;
  //         const resp = await fetch(queryURL);
  //         const body = await resp.text();
  //         res.send(body);
  //       } catch (e) {
  //         res.status(500);
  //         res.send(e);
  //       }
  //     });
  //   }
  // }
  devServer: {
    before: function(app) {
      app.get("/getData", function(req, res) {
        res.json(data);
      });
    },
    open: true,
    port: 8080
  },
};