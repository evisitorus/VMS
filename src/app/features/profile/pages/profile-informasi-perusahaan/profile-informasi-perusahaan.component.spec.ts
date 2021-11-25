import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformasiPerusahaanComponent } from './profile-informasi-perusahaan.component';

describe('ProfileInformasiPerusahaanComponent', () => {
  let component: ProfileInformasiPerusahaanComponent;
  let fixture: ComponentFixture<ProfileInformasiPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInformasiPerusahaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInformasiPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
