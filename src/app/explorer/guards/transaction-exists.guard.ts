import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import { TransactionsService } from '../services/transactions.service';
import { LoadTransactionSuccess } from '../state/actions/transactions.actions';
import { State } from '../state/reducers';
import * as fromTransactions from '../state/selectors/transactions.selectors';

@Injectable()
export class TransactionExistsGuard implements CanActivate {
  constructor(
    private store: Store<State>,
    private transactionsService: TransactionsService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasTransaction(route.params.transactionHash);
  }

  private hasTransaction(transactionHash: string): Observable<boolean> {
    return this
      .hasTransactionInStore(transactionHash)
      .pipe(
        switchMap(isInStoreAndHasBlockHash => {
          if (isInStoreAndHasBlockHash) { return of(isInStoreAndHasBlockHash); }

          return this.hasTransactionInApi(transactionHash);
        }),
      );
  }

  private hasTransactionInStore(transactionHash: string): Observable<boolean> {
    return this.store
      .select(fromTransactions.getTransactionsEntities)
      .pipe(
        map(entities => !!entities[transactionHash] && !!entities[transactionHash].blockNumber),
        take(1),
      );
  }

  private hasTransactionInApi(transactionHash: string): Observable<boolean> {
    return this.transactionsService
      .getTransaction(transactionHash)
      .pipe(
        map(transaction => new LoadTransactionSuccess(transaction)),
        tap((action) => this.store.dispatch(action)),
        map(transaction => !!transaction),
        catchError(() => {
          this.router.navigate(['/explorer']);

          return of(false);
        }),
      );
  }
}
