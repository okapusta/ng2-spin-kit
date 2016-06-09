import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  moduleId: __moduleName || module.id,
  selector: 'sk-word-press',
  styleUrls: ['word-press.css'],
  template: require('./word-press.html')
})

export class WordPressComponent extends BaseSpinner {}
