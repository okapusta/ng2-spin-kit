import {Component, OnInit} from '@angular/core';
import * as spinner from './spinners'

@Component({
  selector: 'app',
  directives: [
    spinner.RotatingPlaneComponent,
    spinner.DoubleBounceComponent,
    spinner.WaveComponent,
    spinner.WanderingCubesComponent,
    spinner.PulseComponent,
    spinner.ChasingDotsComponent,
    spinner.CircleComponent,
    spinner.ThreeBounceComponent,
    spinner.CubeGridComponent,
    spinner.WordPressComponent,
    spinner.FadingCircleComponent,
    spinner.FoldingCubeComponent
  ],
  styles: [`
    .wrapper {
      width: 480px;
      margin: 0 auto;
      text-align: center;
    }
    
    h1 {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px dashed #333;
    }
    
    h3 {
      margin-bottom: 15px;
    }
  `],
  templateUrl: 'app/app.html'
})

export class App implements OnInit {
  ngOnInit(): any {
    console.log('App initialized!');
  }
}
