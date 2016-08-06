/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
		console.log('prod');
    break;
  case 'production':
		console.log('production');
    module.exports = require('./config/webpack.prod');
    break;
  case 'test':
		console.log('test');
    break;
  case 'testing':
		console.log('testing');
    module.exports = require('./config/webpack.test');
    break;
  case 'dev':
		console.log('dev');
    break;
  case 'development':
		console.log('development');
    break;
  default:
		console.log('default');
    module.exports = require('./config/webpack.dev');
    break;
}
