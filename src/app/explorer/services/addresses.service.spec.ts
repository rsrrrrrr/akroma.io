import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AddressesService } from './addresses.service';

describe('AddressesService', () => {
  let service: AddressesService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          AddressesService,
        ],
      });
  });

  beforeEach(() => {
    service = TestBed.get(AddressesService);
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
