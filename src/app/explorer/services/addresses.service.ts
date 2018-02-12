import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Address } from '../models/address';

@Injectable()
export class AddressesService {
  constructor(
    private http: HttpClient,
  ) { }

  getAddress(addressHash: string): Observable<Address> {
    return this.http
      .get<Address>(`${environment.apiUrl}/addresses/${addressHash}`);
  }

}
