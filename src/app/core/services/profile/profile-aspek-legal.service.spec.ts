import { TestBed } from '@angular/core/testing';

import { ProfileAspekLegalService } from './profile-aspek-legal.service';

describe('ProfileAspekLegalService', () => {
  let service: ProfileAspekLegalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAspekLegalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
