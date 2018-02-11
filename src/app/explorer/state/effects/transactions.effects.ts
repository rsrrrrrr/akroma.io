import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { TransactionsService } from '../../services/transactions.service';
import { LOAD_TRANSACTIONS, LoadTransactionsFail, LoadTransactionsSuccess } from '../actions/transactions.actions';

@Injectable()
export class TransactionsEffects {
  constructor(
    private actions$: Actions,
    private transactionsService: TransactionsService,
  ) { }

  @Effect()
  loadBlocks$ = this.actions$
    .ofType(LOAD_TRANSACTIONS)
    .pipe(
      switchMap(() => this.transactionsService
        .getTransactions()
        .pipe(
          map(transactions => new LoadTransactionsSuccess(transactions)),
          catchError(error => of(new LoadTransactionsFail(error))),
      )),
  );
}
