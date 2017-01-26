## Install Webpack

### create project

```bash
mkdir SampleApp && cd $_ 
```

### install webapck and http-server

```bash
npm i webpack -g
npm i http-server -g
```

### make application

open VSCode next `!` and press 'tab' key
add `<script src="bin/build.js"></script>` under 'body' tag

(index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script src="bin/bundle.js"></script>
</body>
</html>
```

(src/main.js)
```javascript
console.log('hello');
```

### build

```bash
webpack src/main.js bin/bundle.js
http-server -p 9000
```
