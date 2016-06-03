import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-wave',
  styleUrls: ['wave.css'],
  templateUrl: 'wave.html'
})

export class WaveComponent extends BaseSpinner {}
