import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-three-bounce',
  styleUrls: ['three-bounce.css'],
  template: require('./three-bounce.html')
})

export class ThreeBounceComponent extends BaseSpinner {}
