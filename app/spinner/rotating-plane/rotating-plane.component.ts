import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-rotating-plane',
  styleUrls: ['rotating-plane.css'],
  template: require('./rotating-plane.html')
})

export class RotatingPlaneComponent extends BaseSpinner {}
