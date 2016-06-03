import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-pulse',
  styleUrls: ['pulse.css'],
  templateUrl: 'pulse.html'
})

export class PulseComponent extends BaseSpinner {}
