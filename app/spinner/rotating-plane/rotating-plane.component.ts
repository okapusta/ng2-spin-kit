import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'sk-rotating-plane',
  styleUrls: ['rotating-plane.css'],
  template: require('./rotating-plane.html')
})

export class RotatingPlaneComponent implements OnDestroy {
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
