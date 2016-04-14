ng2-spin-kit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS v2.x

Inspired by angular-spinkit (https://github.com/Urigo/angular-spinkit)

![ng2-spin-kit](ng2-spin-kit.gif?raw=true "ng2-spin-kit")

## Usage
1. Install with NPM:
  ```javascript
  npm install ng2-spin-kit --save
  ```

2. Import one component
  ```javascript
  import {RotatingPlaneComponent} from 'ng2-spin-kit/app/spinner/rotating-plane/rotating-plane.component'
  ```

3. or all of them
  ```javascript
  import * as spinner from 'ng2-spin-kit/app/spinners'
  ```
  
4. Use as a directive:
  ```javascript
  import {Component} from 'angular2/core';
  import * as spinner from 'ng2-spin-kit/app/spinners';
  
  @Component({
    selector: 'app',
    directives: [
      spinner.RotatingPlaneComponent,
      spinner.DoubleBounceComponent,
      spinner.WaveComponent,
      spinner.WanderingCubesComponent,
      spinner.PulseComponent,
      spinner.ChasingDotsComponent,
      spinner.CircleComponent,
      spinner.ThreeBounceComponent,
      spinner.CubeGridComponent,
      spinner.WordPressComponent,
      spinner.FadingCircleComponent,
      spinner.FoldingCubeComponent
    ],
    templateUrl: 'app/app.html'
  })
  ```

  ```html
  <sk-rotating-plane-spinner [isRunning]="..." [delay]="..."></sk-rotating-plane-spinner>
  <sk-double-bounce-spinner [isRunning]="..." [delay]="..."></sk-double-bounce-spinner>
  <sk-wave-spinner [isRunning]="..." [delay]="..."></sk-wave-spinner>
  <sk-wandering-cubes-spinner [isRunning]="..." [delay]="..."></sk-wandering-cubes-spinner>
  <sk-pulse-spinner [isRunning]="..." [delay]="..."></sk-pulse-spinner>
  <sk-chasing-dots-spinner [isRunning]="..." [delay]="..."></sk-chasing-dots-spinner>
  <sk-circle-spinner [isRunning]="..." [delay]="..."></sk-circle-spinner>
  <sk-three-bounce-spinner [isRunning]="..." [delay]="..."></sk-three-bounce-spinner>
  <sk-cube-grid-spinner [isRunning]="..." [delay]="..."></sk-cube-grid-spinner>
  <sk-word-press-spinner [isRunning]="..." [delay]="..."></sk-word-press-spinner>
  <sk-fading-circle-spinner [isRunning]="..." [delay]="..."></sk-fading-circle-spinner>
  <sk-folding-cube [isRunning]="..." [delay]="..."></sk-folding-cube>
  ```

#### For every component you can set:
  ```
  [isRunning]: boolean - state of the spinner, true - visible, false - hidden, default: true
  ```
  
  ```
  [delay]: number - representing the milliseconds to wait, before showing the spinner, default: 0
  ```
  
#### You can generate JavaScript code based on TypeScript by:
  ```javascript
  npm run tcs
  ```
  
#### To regenerate typings:
  ```javascript
  npm run typings
  ```
  
## Add all your requests and ideas in the issues area or send us a pull request!
