import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-double-bounce',
  styleUrls: ['double-bounce.css'],
  templateUrl: 'double-bounce.html'
})

export class DoubleBounceComponent extends BaseSpinner {}
