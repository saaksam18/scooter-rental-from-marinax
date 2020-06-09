import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsItemComponent } from './ems-item.component';

describe('EmsItemComponent', () => {
  let component: EmsItemComponent;
  let fixture: ComponentFixture<EmsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
