import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalControllerComponent } from './interval-controller.component';

describe('IntervalControllerComponent', () => {
  let component: IntervalControllerComponent;
  let fixture: ComponentFixture<IntervalControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
