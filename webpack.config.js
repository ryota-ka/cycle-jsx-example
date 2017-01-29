module.exports = {
  entry: {
    application: './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: './dest',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            ['transform-react-jsx', { 'pragma': 'html' }],
          ],
          presets: ['latest'],
        },
        test: /\.js$/,
      },
    ],
  },
};
