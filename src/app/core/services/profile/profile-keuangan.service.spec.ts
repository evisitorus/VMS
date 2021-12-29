import { TestBed } from '@angular/core/testing';

import { ProfileKeuanganService } from './profile-keuangan.service';

describe('ProfileKeuanganService', () => {
  let service: ProfileKeuanganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileKeuanganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
