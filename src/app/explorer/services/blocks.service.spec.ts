import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';

import { BlocksService } from './blocks.service';

describe('BlocksService', () => {
  let service: BlocksService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          BlocksService,
        ],
      });
  });

  beforeEach(() => {
    service = TestBed.get(BlocksService);
    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.getBlocks', () => {
    it('should send a GET request to retrieve blocks', () => {
      service.getBlocks()
        .subscribe();

      const req = httpMock.expectOne(`${environment.apiUrl}/blocks`);

      expect(req.request.method).toEqual('GET');
    });
  });
});
