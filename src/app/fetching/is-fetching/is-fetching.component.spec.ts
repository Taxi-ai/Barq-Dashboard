import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsFetchingComponent } from './is-fetching.component';

describe('IsFetchingComponent', () => {
  let component: IsFetchingComponent;
  let fixture: ComponentFixture<IsFetchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsFetchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsFetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
