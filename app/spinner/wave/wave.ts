import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-wave',
  styleUrls: ['wave.css'],
  template: require('./wave.html')
})

export class WaveComponent extends BaseSpinner {}
