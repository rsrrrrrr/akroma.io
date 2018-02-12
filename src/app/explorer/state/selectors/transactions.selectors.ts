import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';
import { Transaction } from '../../models/transaction';
import { ExplorerState, getExplorerState } from '../reducers';
import * as fromTransactions from '../reducers/transactions.reducer';

export const getTransactionsState = createSelector(
  getExplorerState,
  (state: ExplorerState) => state.transactions,
);

export const getTransactionsEntities = createSelector(
  getTransactionsState,
  fromTransactions.getTransactionsEntities,
);

export const getTransactionsLoaded = createSelector(
  getTransactionsState,
  fromTransactions.getTransactionsLoaded,
);

export const getTransactionsLoading = createSelector(
  getTransactionsState,
  fromTransactions.getTransactionsLoading,
);

export const getLast10Transactions = createSelector(
  getTransactionsEntities,
  entities => Object
    .values(entities)
    .sort((a, b) => {
      if (a.timestamp < b.timestamp) { return 1; }
      if (a.timestamp > b.timestamp) { return -1; }
      return 0;
    })
    .slice(0, 10),
);

export const getSelectedTransaction = createSelector(
  getTransactionsEntities,
  fromRoot.getRouterState,
  (entities, router): Transaction => router.state && entities[router.state.params.transactionHash],
);
