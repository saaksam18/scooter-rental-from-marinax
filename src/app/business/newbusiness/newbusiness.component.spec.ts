import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbusinessComponent } from './newbusiness.component';

describe('NewbusinessComponent', () => {
  let component: NewbusinessComponent;
  let fixture: ComponentFixture<NewbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
