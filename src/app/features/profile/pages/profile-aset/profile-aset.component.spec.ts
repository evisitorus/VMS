import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAsetComponent } from './profile-aset.component';

describe('ProfileAsetComponent', () => {
  let component: ProfileAsetComponent;
  let fixture: ComponentFixture<ProfileAsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
