import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiconductorComponent } from './semiconductor.component';

describe('SemiconductorComponent', () => {
  let component: SemiconductorComponent;
  let fixture: ComponentFixture<SemiconductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiconductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiconductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
