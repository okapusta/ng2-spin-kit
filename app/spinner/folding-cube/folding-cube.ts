import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-folding-cube',
  styleUrls: ['folding-cube.css'],
  templateUrl: 'folding-cube.html'
})

export class FoldingCubeComponent extends BaseSpinner {}
