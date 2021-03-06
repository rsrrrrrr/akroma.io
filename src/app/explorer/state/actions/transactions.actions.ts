import { Action } from '@ngrx/store';

import { Transaction } from '../../models/transaction';

export const LOAD_TRANSACTION_SUCCESS = '[Explorer] Load Transaction Success';
export const LOAD_TRANSACTIONS = '[Explorer] Load Transactions';
export const LOAD_TRANSACTIONS_FAIL = '[Explorer] Load Transactions Fail';
export const LOAD_TRANSACTIONS_SUCCESS = '[Explorer] Load Transactions Success';

export class LoadTransactionSuccess implements Action {
  readonly type = LOAD_TRANSACTION_SUCCESS;

  constructor(public payload: Transaction) { }
}

export class LoadTransactions implements Action {
  readonly type = LOAD_TRANSACTIONS;
}

export class LoadTransactionsFail implements Action {
  readonly type = LOAD_TRANSACTIONS_FAIL;

  constructor(public payload: any) { }
}

export class LoadTransactionsSuccess implements Action {
  readonly type = LOAD_TRANSACTIONS_SUCCESS;

  constructor(public payload: Transaction[]) { }
}

export type Actions =
  | LoadTransactionSuccess
  | LoadTransactions
  | LoadTransactionsFail
  | LoadTransactionsSuccess;
