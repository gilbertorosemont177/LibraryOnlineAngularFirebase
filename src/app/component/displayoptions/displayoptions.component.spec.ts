import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayoptionsComponent } from './displayoptions.component';

describe('DisplayoptionsComponent', () => {
  let component: DisplayoptionsComponent;
  let fixture: ComponentFixture<DisplayoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
