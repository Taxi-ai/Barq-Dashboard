import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGraphComponent } from './cars-graph.component';

describe('CarsGraphComponent', () => {
  let component: CarsGraphComponent;
  let fixture: ComponentFixture<CarsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
