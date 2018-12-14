module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
	  {
		test: /\.css$/,
		loaders: ['style-loader', 'css-loader'],
	  }
    ]
  }
};