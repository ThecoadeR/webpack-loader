const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loader']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        // path.resolve(__dirname, './loader/replaceLoader.js')
        {
          loader: 'replaceLoader',
          options: {
            name: 'Zhu'
          }
        }
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}