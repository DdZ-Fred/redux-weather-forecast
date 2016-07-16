module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-1',
        ],
      },
    ],
  },
};
