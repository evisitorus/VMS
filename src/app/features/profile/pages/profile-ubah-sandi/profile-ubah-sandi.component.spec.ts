import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUbahSandiComponent } from './profile-ubah-sandi.component';

describe('ProfileUbahSandiComponent', () => {
  let component: ProfileUbahSandiComponent;
  let fixture: ComponentFixture<ProfileUbahSandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUbahSandiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUbahSandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
