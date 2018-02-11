import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';

import * as fromBlocks from './blocks.reducer';
import * as fromTransactions from './transactions.reducer';

export interface State extends fromRoot.State {
  explorer: ExplorerState;
}

export interface ExplorerState {
  blocks: fromBlocks.BlocksState;
  transactions: fromTransactions.TransactionsState;
}

export const reducers: ActionReducerMap<ExplorerState> = {
  blocks: fromBlocks.reducer,
  transactions: fromTransactions.reducer,
};

export const getExplorerState = createFeatureSelector<ExplorerState>('explorer');
