import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFormArrayComponent } from './r-form-array.component';

describe('RFormArrayComponent', () => {
  let component: RFormArrayComponent;
  let fixture: ComponentFixture<RFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
