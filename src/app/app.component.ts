import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'component-communication';
  emitedNumber = 0;

  onInterbval(event: number) {
    this.emitedNumber = event;
  }

  onResetInterval(event: boolean) {
    this.emitedNumber = 0;
  }
}
