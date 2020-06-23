import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesGraphComponent } from './issues-graph.component';

describe('IssuesGraphComponent', () => {
  let component: IssuesGraphComponent;
  let fixture: ComponentFixture<IssuesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
