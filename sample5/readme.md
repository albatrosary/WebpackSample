# Webpack and Angular2.RC4

(package.json)
```json
{
  "name": "sample5",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --inline --progress",
    "server": "lite-server",
    "postinstall": "typings install"
  },
  "author": "Fumio SAGAWA",
  "license": "ISC",
  "dependencies": {
    "@angular/common": "2.0.0-rc.4",
    "@angular/compiler": "2.0.0-rc.4",
    "@angular/core": "2.0.0-rc.4",
    "@angular/forms": "0.2.0",
    "@angular/http": "2.0.0-rc.4",
    "@angular/platform-browser": "2.0.0-rc.4",
    "@angular/platform-browser-dynamic": "2.0.0-rc.4",
    "@angular/router": "3.0.0-beta.2",
    "systemjs": "0.19.31",
    "core-js": "2.4.0",
    "reflect-metadata": "0.1.3",
    "rxjs": "5.0.0-beta.6",
    "zone.js": "0.6.12"
  },
  "devDependencies": {
    "json-loader": "^0.5.4",
    "lite-server": "^2.2.2",
    "raw-loader": "^0.5.1",
    "ts-loader": "^0.8.2",
    "typescript": "^1.8.10",
    "typings": "^1.3.2",
    "webpack": "^1.13.1"
  }
}
```

## Entry Point

(app/vendor.ts)
```typescript
import "@angular/common";
import "@angular/compiler";
import "@angular/core";
import "@angular/forms";
import "@angular/http";
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/router";
import 'rxjs';
```


(app/polyfills.ts)
```typescript
import 'core-js/es6';
import 'zone.js/dist/zone';
import 'reflect-metadata';
```


(app/app.ts)
```typescript
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
```

AppComponent(app/app.component.ts)
```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  `
})

export class AppComponent { }
```