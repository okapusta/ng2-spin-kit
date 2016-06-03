import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-rotating-plane',
  styleUrls: ['rotating-plane.css'],
  templateUrl: 'rotating-plane.html'
})

export class RotatingPlaneComponent extends BaseSpinner {}
