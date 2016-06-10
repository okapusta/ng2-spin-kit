import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-cube-grid',
  styleUrls: ['cube-grid.css'],
  template: require('./cube-grid.html')
})

export class CubeGridComponent extends BaseSpinner {}
