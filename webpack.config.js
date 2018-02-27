module.exports = {
   entry: './app/main.js',
   output: {
      filename: 'bundle.js'
   },
   resolve: {
    extensions: ['', '.js', '.jsx']
  },
   module: {
      loaders: [
         {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         }
      ]
   },
   devServer: {
      port: 7777
   }
};