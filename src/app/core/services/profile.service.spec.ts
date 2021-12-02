import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../core.module';
import { Observable } from 'rxjs';
import { AddPekerjaanInterface } from '../interfaces/add-pekerjaan-interface';
import { ApiService } from './api/api.service';


import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;
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
    service = TestBed.inject(ProfileService);
    apiService = TestBed.inject(ApiService);
  });

  it('test addPekerjaan function', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    let param: AddPekerjaanInterface = {
      // email: 'mail@test.com',
      namaPekerjaan: 'testing',
      pemberiPekerjaan: 'testing',
      nilaiPekerjaan: 200000.00,
      tahunPekerjaan: '2010',
      buktiPekerjaanFilePath: 'testing'
    };

    spyOn(apiService, 'sendRequest').and.returnValue(res);
    service.addPekerjaan(param).subscribe(
      (resp) => {
        expect(resp).toBe(true);
      }
    );
  });


  it('test getPekerjaan function', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    let badanUsaha: string = "124";

    spyOn(apiService, 'sendRequest').and.returnValue(res);
    service.getPekerjaan().subscribe(
      (resp) => {
        expect(resp).toBe(true);
      }
    );
  });

});
