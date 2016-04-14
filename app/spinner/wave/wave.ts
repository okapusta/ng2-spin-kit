import {Component} from 'angular2/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-wave',
  styles: [`
    .wave-spinner {
      width: 42px;
      height: 40px;
      margin: 25px auto;
    }
    
    .wave-spinner > div {
      background-color: #333;
      height: 100%;
      width: 5px;
      display: inline-block;
      
      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }
    
    .wave-spinner .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    
    .wave-spinner .rect3 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    
    .wave-spinner .rect4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    
    .wave-spinner .rect5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    
    @-webkit-keyframes sk-stretchdelay {
      0%, 40%, 100% {
        -webkit-transform: scaleY(0.4)
      } 20% {
        -webkit-transform: scaleY(1.0)
      }
    }
    
    @keyframes sk-stretchdelay {
      0%, 40%, 100% { 
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      } 20% { 
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
      }
    }
  `],
  templateUrl: 'app/spinner/wave/wave.html'
})

export class WaveComponent extends BaseSpinner {}