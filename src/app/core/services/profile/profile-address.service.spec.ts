import { TestBed } from '@angular/core/testing';

import { ProfileAddressService } from './profile-address.service';

describe('ProfileAddressService', () => {
  let service: ProfileAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
