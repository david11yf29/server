const path = require('path');

module.exports = {
  // Inform webpack we are building a bundle.js for nodejs not for browser
  target: 'node',

  // Tell webpack the root fileof our server
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to run babel on every file 
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loder',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};