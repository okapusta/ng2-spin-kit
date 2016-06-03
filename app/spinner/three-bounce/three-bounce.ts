import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-three-bounce',
  styleUrls: ['three-bounce.css'],
  templateUrl: 'three-bounce.html'
})

export class ThreeBounceComponent extends BaseSpinner {}
