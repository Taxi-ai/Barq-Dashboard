import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsGraphComponent } from './admins-graph.component';

describe('AdminsGraphComponent', () => {
  let component: AdminsGraphComponent;
  let fixture: ComponentFixture<AdminsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
