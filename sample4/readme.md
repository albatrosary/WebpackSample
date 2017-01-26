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
    "server": "lite-server"
  },
  "author": "Fumio SAGAWA",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.1.1"
  },
  "devDependencies": {
    "@types/jquery": "^2.0.39",
    "lite-server": "^2.2.2",
    "ts-loader": "^0.8.2",
    "typescript": "^2.1.5",
    "webpack": "^1.14.0"
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