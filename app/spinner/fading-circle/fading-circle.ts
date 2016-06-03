import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-fading-circle',
  styleUrls: ['fading-circle.css'],
  templateUrl: 'fading-circle.html'
})

export class FadingCircleComponent extends BaseSpinner {}
