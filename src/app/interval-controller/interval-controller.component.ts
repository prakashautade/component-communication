import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interval-controller',
  templateUrl: './interval-controller.component.html',
  styleUrls: ['./interval-controller.component.css']
})
export class IntervalControllerComponent implements OnInit {

  @Output() numberInterval = new EventEmitter<number>();
  @Output() resetInterval = new EventEmitter<boolean>();

  private stopInetrval = true;
  private numberEmited = 0;

  constructor() { }

  ngOnInit() {
  }

  public onStart(): void {
    this.stopInetrval = false;
    this.emitNumber();
  }

  public onStop(): void {
    this.stopInetrval = true;
  }

  public onReset(): void {
    this.numberEmited = 0;
    this.stopInetrval = true;
    this.resetInterval.emit(this.stopInetrval);
  }

  public emitNumber(): void {
    (async () => {
      while (!this.stopInetrval) {
        this.numberInterval.emit(this.numberEmited++);
        await this.delay(1000);
      }
    })();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
