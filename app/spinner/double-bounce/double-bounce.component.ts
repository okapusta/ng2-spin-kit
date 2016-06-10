import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-double-bounce',
  styleUrls: ['double-bounce.css'],
  template: require('./double-bounce.html')
})

export class DoubleBounceComponent extends BaseSpinner {}
