import {Component} from '@angular/core';
import {BaseSpinner} from '../base-spinner';

@Component({
  selector: 'sk-wave',
  styleUrls: ['wave.css'],
  template: require('./wave.html')
})

export class WaveComponent extends implements OnDestroy {
private visible: boolean = true;
private timeout: any;

@Input()
public delay: number = 0;

@Input()
public set isRunning(value: boolean) {
    if (!value) {
      this.cancel();
      this.visible = false;
    }

    if (this.timeout) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.visible = true;
      this.cancel();
    }, this.delay);
  }

private cancel(): void {
    clearTimeout(this.timeout);
  this.timeout = undefined;
}

  ngOnDestroy(): any {
    this.cancel();
  }
}
