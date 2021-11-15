import { TestBed } from '@angular/core/testing';

import { ProfilePICService } from './profile-pic.service';

describe('ProfilePicService', () => {
  let service: ProfilePICService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilePICService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
