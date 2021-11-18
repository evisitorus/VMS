import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import { ApiInterface } from '../../interfaces/api-interface';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let client: HttpClient;

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
    service = TestBed.inject(ApiService);
    client = TestBed.inject(HttpClient);
  });

  it('test GET', () => {
    const params: ApiInterface = {
      method: 'GET',
      url: '/url/testing'
    };
    spyOn(client, 'get');
    service.sendRequest(params);
    expect(client.get).toHaveBeenCalled();
  });

  it('test PUT', () => {
    const params: ApiInterface = {
      method: 'PUT',
      url: '/url/testing'
    };
    spyOn(client, 'put');
    service.sendRequest(params);
    expect(client.put).toHaveBeenCalled();
  });

  it('test DELETE', () => {
    const params: ApiInterface = {
      method: 'DELETE',
      url: '/url/testing'
    };
    spyOn(client, 'delete');
    service.sendRequest(params);
    expect(client.delete).toHaveBeenCalled();
  });

  it('test default', () => {
    const params: ApiInterface = {
      method: 'get',
      url: '/url/testing'
    };
    spyOn(client, 'get');
    service.sendRequest(params);
    expect(client.get).toHaveBeenCalled();
  });

});
