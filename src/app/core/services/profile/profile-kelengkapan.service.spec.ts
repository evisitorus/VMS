import { TestBed } from '@angular/core/testing';

import { ProfileKelengkapanService } from './profile-kelengkapan.service';

describe('ProfileKelengkapanService', () => {
  let service: ProfileKelengkapanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileKelengkapanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
