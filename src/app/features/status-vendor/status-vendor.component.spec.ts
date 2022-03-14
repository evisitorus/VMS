import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVendorComponent } from './status-vendor.component';

describe('StatusVendorComponent', () => {
  let component: StatusVendorComponent;
  let fixture: ComponentFixture<StatusVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
