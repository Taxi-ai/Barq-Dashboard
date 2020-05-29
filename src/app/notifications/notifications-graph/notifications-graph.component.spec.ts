import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsGraphComponent } from './notifications-graph.component';

describe('NotificationsGraphComponent', () => {
  let component: NotificationsGraphComponent;
  let fixture: ComponentFixture<NotificationsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
