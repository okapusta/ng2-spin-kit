import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-word-press',
  styles: [`
    .word-press-spinner {
      position: relative;
      width: 30px;
      height: 30px;
      margin: 25px auto;
      background-color: #333;
      border-radius: 30px;
      
      -webkit-animation: inner-circle 1s linear infinite;
      animation: inner-circle 1s linear infinite;
    }
    
    .inner-circle {
      display: block;
      background: #fff;
      width: 8px;
      height: 8px;
      position: absolute;
      border-radius: 8px;
      top: 5px;
      left: 5px;
    }
    
    @-webkit-keyframes inner-circle {
      0% {
       -webkit-transform: rotate(0);
      } 100% {
       -webkit-transform: rotate(360deg);
      }
    }
    
    @keyframes inner-circle {
      0% {
        transform: rotate(0);
        -webkit-transform:rotate(0);
      }
      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
      }
    }
  `],
  templateUrl: 'app/spinner/word-press/word-press.html'
})

export class WordPressComponent extends BaseSpinner {}
