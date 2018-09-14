import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorktComponent } from './newyorkt.component';

describe('NewyorktComponent', () => {
  let component: NewyorktComponent;
  let fixture: ComponentFixture<NewyorktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewyorktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewyorktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
