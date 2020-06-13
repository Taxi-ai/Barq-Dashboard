import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickingLayerComponent } from './clicking-layer.component';

describe('ClickingLayerComponent', () => {
  let component: ClickingLayerComponent;
  let fixture: ComponentFixture<ClickingLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickingLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickingLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
