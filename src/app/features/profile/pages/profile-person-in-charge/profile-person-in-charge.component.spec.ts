import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonInChargeComponent } from './profile-person-in-charge.component';

describe('ProfilePersonInChargeComponent', () => {
  let component: ProfilePersonInChargeComponent;
  let fixture: ComponentFixture<ProfilePersonInChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePersonInChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePersonInChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
