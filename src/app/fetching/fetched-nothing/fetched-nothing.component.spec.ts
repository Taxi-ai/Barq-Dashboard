import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedNothingComponent } from './fetched-nothing.component';

describe('FetchedNothingComponent', () => {
  let component: FetchedNothingComponent;
  let fixture: ComponentFixture<FetchedNothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchedNothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchedNothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
