import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLaporanKeuanganComponent } from './profile-laporan-keuangan.component';

describe('ProfileLaporanKeuanganComponent', () => {
  let component: ProfileLaporanKeuanganComponent;
  let fixture: ComponentFixture<ProfileLaporanKeuanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLaporanKeuanganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLaporanKeuanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
