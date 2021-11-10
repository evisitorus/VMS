import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CoreModule } from '../../core.module';
import { ProfileAssetInterface } from '../../interfaces/profile-asset.interface';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

import { ProfileAssetService } from './profile-asset.service';

describe('ProfileAssetService', () => {
  let service: ProfileAssetService;
  let authService: AuthService;
  let apiService: ApiService;

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
    service = TestBed.inject(ProfileAssetService);
    authService = TestBed.inject(AuthService);
    apiService = TestBed.inject(ApiService);
  });

  it('test getDataAsset function', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    spyOn(authService, 'getLocalStorage').and.returnValue("tokensample");
    spyOn(apiService, 'sendRequest').and.returnValue(res);

    service.getDataAsset().subscribe(
      (resp) => {
        expect(resp).toBe(true);
      }
    );
  });

  it('test saveProfileAsset function', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    let param: ProfileAssetInterface = {
      namaAsset: "Sample",
      jumlah: 10,
      tahunPembuatan: "2020"
    };

    spyOn(authService, 'getLocalStorage').and.returnValue("tokensample");
    spyOn(apiService, 'sendRequest').and.returnValue(res);

    service.saveProfileAsset(param).subscribe(
      (resp) => {
        expect(resp).toBe(true);
      }
    );
  });

});
