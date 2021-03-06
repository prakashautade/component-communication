import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { IntervalControllerComponent } from './interval-controller/interval-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    IntervalControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
