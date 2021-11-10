import { TestBed } from '@angular/core/testing';

import { ProfileAssetService } from './profile-asset.service';

describe('ProfileAssetService', () => {
  let service: ProfileAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
