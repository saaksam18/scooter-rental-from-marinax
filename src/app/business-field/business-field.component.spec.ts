import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFieldComponent } from './business-field.component';

describe('BusinessFieldComponent', () => {
  let component: BusinessFieldComponent;
  let fixture: ComponentFixture<BusinessFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
