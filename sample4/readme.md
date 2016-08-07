## webpack.config.js

(package.json)
```json
{
  "name": "sample4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "server": "lite-server",
    "postinstall": "typings install dt~jquery -SG"
  },
  "author": "Fumio SAGAWA",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.1.0"
  },
  "devDependencies": {
    "lite-server": "^2.2.2",
    "ts-loader": "^0.8.2",
    "typescript": "^1.8.10",
    "typings": "^1.3.2",
    "webpack": "^1.13.1"
  }
}
```

(webpack.config.js)
```javascript
module.exports = {
  entry: './app/app.ts',
  output: {
    filename: './app/bin/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
```

```bash
npm run build
npm run server
```