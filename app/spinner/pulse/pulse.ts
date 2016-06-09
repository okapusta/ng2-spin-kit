import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-pulse',
  styleUrls: ['pulse.css'],
  template: require('./pulse.html')
})

export class PulseComponent extends BaseSpinner {}
