module.exports = {
  entry: './app/app.ts',
  output: {
    filename: './app/bin/bundle.js'
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
