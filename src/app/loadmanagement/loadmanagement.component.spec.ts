import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmanagementComponent } from './loadmanagement.component';

describe('LoadmanagementComponent', () => {
  let component: LoadmanagementComponent;
  let fixture: ComponentFixture<LoadmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
