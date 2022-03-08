import { TestBed } from '@angular/core/testing';

import { PimpinanDanPengurusService } from './pimpinan-dan-pengurus.service';

describe('PimpinanDanPengurusService', () => {
  let service: PimpinanDanPengurusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PimpinanDanPengurusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
