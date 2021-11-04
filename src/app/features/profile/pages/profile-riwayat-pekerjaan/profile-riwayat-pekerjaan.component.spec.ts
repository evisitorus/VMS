import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRiwayatPekerjaanComponent } from './profile-riwayat-pekerjaan.component';

describe('ProfileRiwayatPekerjaanComponent', () => {
  let component: ProfileRiwayatPekerjaanComponent;
  let fixture: ComponentFixture<ProfileRiwayatPekerjaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRiwayatPekerjaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRiwayatPekerjaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
