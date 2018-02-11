import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';

import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          TransactionsService,
        ],
      });
  });

  beforeEach(() => {
    service = TestBed.get(TransactionsService);
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.getTransactions', () => {
    it('should send a GET request to retrieve transactions', () => {
      service.getTransactions()
        .subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/transactions`);

      expect(req.request.method).toEqual('GET');
    });
  });
});
