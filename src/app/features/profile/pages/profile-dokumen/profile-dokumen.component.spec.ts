import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDokumenComponent } from './profile-dokumen.component';

describe('ProfileDokumenComponent', () => {
  let component: ProfileDokumenComponent;
  let fixture: ComponentFixture<ProfileDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDokumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
