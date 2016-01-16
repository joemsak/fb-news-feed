var path = require("path");

module.exports = {
  context: path.resolve(__dirname),

  entry: path.resolve(__dirname, 'src', 'entry.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
}
