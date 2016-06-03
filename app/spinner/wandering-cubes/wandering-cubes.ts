import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-wandering-cubes',
  styleUrls: ['wandering-cubes.css'],
  templateUrl: 'wandering-cubes.html'
})

export class WanderingCubesComponent extends BaseSpinner {}
