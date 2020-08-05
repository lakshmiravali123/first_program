import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facility2Component } from './facility2.component';

describe('Facility2Component', () => {
  let component: Facility2Component;
  let fixture: ComponentFixture<Facility2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facility2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facility2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
