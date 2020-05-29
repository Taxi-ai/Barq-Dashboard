import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesGraphComponent } from './packages-graph.component';

describe('PackagesGraphComponent', () => {
  let component: PackagesGraphComponent;
  let fixture: ComponentFixture<PackagesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
