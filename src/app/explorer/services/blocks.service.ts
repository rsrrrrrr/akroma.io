import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Block } from '../models/block';

@Injectable()
export class BlocksService {
  constructor(
    private http: HttpClient,
  ) { }

  getBlocks(): Observable<Block[]> {
    return this.http
      .get<Block[]>(`${environment.apiUrl}/blocks`);
  }
}
