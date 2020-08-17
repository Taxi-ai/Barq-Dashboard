import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullChartComponent } from './null-chart.component';

describe('NullChartComponent', () => {
  let component: NullChartComponent;
  let fixture: ComponentFixture<NullChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
