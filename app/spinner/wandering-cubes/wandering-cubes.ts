import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-wandering-cubes',
  styleUrls: ['wandering-cubes.css'],
  template: require('./wandering-cubes.html')
})

export class WanderingCubesComponent extends BaseSpinner {}
