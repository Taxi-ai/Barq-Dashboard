import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpinnerComponent } from './dashboard-spinner.component';

describe('DashboardSpinnerComponent', () => {
  let component: DashboardSpinnerComponent;
  let fixture: ComponentFixture<DashboardSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
