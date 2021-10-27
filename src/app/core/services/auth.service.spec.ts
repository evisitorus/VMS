import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../core.module';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('test setToken function', () => {
    spyOn(service, 'setLocalStorage');
    service.setToken('sample token');
    expect(service.setLocalStorage).toHaveBeenCalled();
  });

});
