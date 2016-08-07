## dependencies

webpack reads the enty point and analyzes it dependencies, it dependencies' dependencies, and so on 

webpack buildes the entry point and all its dependencies into a single file.

(src/main.js)
```javascript
let print = require('./print');
print('Hello World');
```

(src/print.js)
```javascript
module.exports = (msg) => document.write('[print]', msg);
```
Execute a command:
```bash
webpack src/main.js bin/bundle.js
```

[https://webpack.github.io/docs/usage.html](https://webpack.github.io/docs/usage.html)
