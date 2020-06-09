import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiconductorItemComponent } from './semiconductor-item.component';

describe('SemiconductorItemComponent', () => {
  let component: SemiconductorItemComponent;
  let fixture: ComponentFixture<SemiconductorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiconductorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiconductorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
