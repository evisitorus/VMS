import { TestBed } from '@angular/core/testing';

import { ProfileDashboardService } from './profile-dashboard.service';

describe('ProfileDashboardService', () => {
  let service: ProfileDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
