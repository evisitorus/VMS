import { TestBed } from '@angular/core/testing';

import { ProfileDocumentService } from './profile-document.service';

describe('ProfileDocumentService', () => {
  let service: ProfileDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
