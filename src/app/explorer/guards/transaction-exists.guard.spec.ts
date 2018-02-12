import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../core/state/reducers';
import { TransactionsService } from '../services/transactions.service';
import * as fromExplorer from '../state/reducers';

import { TransactionExistsGuard } from './transaction-exists.guard';

describe('TransactionExistsGuard', () => {
  let guard: TransactionExistsGuard;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
          RouterTestingModule,
        ],
        providers: [
          { provide: TransactionsService, useValue: new TransactionsService(null) },
          TransactionExistsGuard,
        ],
      });
  });

  beforeEach(() => {
    guard = TestBed.get(TransactionExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
