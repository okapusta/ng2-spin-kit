import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-word-press',
  styleUrls: ['word-press.css'],
  templateUrl: 'word-press.html'
})

export class WordPressComponent extends BaseSpinner {}
