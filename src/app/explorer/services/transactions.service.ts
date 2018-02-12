import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionsService {

  constructor(
    private http: HttpClient,
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(`${environment.apiUrl}/transactions`);
  }

  getTransaction(transactionHash: string): Observable<Transaction> {
    return this.http
      .get<Transaction>(`${environment.apiUrl}/transactions/${transactionHash}`);
  }
}
