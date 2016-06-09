import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-chasing-dots',
  styleUrls: ['chasing-dots.css'],
  template: require('./chasing-dots.html')

})

export class ChasingDotsComponent extends BaseSpinner {}
