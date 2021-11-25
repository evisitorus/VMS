import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVerifikasiKelengkapanComponent } from './profile-verifikasi-kelengkapan.component';

describe('ProfileVerifikasiKelengkapanComponent', () => {
  let component: ProfileVerifikasiKelengkapanComponent;
  let fixture: ComponentFixture<ProfileVerifikasiKelengkapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileVerifikasiKelengkapanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVerifikasiKelengkapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
