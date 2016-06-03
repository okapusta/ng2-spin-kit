import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-circle',
  styleUrls: ['circle.css'],
  templateUrl: 'circle.html'
})

export class CircleComponent extends BaseSpinner {}
