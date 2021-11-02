import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAlamatComponent } from './profile-alamat.component';

describe('ProfileAlamatComponent', () => {
  let component: ProfileAlamatComponent;
  let fixture: ComponentFixture<ProfileAlamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAlamatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
