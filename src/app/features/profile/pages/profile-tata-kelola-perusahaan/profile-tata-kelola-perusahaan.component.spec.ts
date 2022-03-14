import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTataKelolaPerusahaanComponent } from './profile-tata-kelola-perusahaan.component';

describe('ProfileTataKelolaPerusahaanComponent', () => {
  let component: ProfileTataKelolaPerusahaanComponent;
  let fixture: ComponentFixture<ProfileTataKelolaPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTataKelolaPerusahaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTataKelolaPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
