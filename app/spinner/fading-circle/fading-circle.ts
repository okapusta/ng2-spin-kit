import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-fading-circle',
  styleUrls: ['fading-circle.css'],
  template: require('./fading-circle.html')
})

export class FadingCircleComponent extends BaseSpinner {}
