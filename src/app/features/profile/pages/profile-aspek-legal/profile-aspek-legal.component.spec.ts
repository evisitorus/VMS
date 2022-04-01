import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAspekLegalComponent } from './profile-aspek-legal.component';

describe('ProfileAspekLegalComponent', () => {
  let component: ProfileAspekLegalComponent;
  let fixture: ComponentFixture<ProfileAspekLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAspekLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAspekLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
