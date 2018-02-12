import { Transaction } from '../../models/transaction';
import {
  Actions,
  LOAD_TRANSACTIONS,
  LOAD_TRANSACTIONS_FAIL,
  LOAD_TRANSACTIONS_SUCCESS,
  LOAD_TRANSACTION_SUCCESS,
} from '../actions/transactions.actions';

interface TransactionEntities {
  [hash: string]: Transaction;
}

export interface TransactionsState {
  entities: TransactionEntities;
  loaded: boolean;
  loading: boolean;
}

export const initialState: TransactionsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: Actions): TransactionsState {
  switch (action.type) {
    case LOAD_TRANSACTIONS: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_TRANSACTION_SUCCESS: {
      const transaction = action.payload;
      const updatedEntities = {
        ...state.entities,
        [transaction.hash]: transaction,
      };

      return {
        ...state,
        entities: updatedEntities,
      };
    }

    case LOAD_TRANSACTIONS_SUCCESS: {
      const transactions = action.payload;

      const updatedEntities = transactions.reduce((entities: TransactionEntities, transaction: Transaction) => {
        return {
          ...entities,
          [transaction.hash]: transaction,
        };
      }, { ...state.entities });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities: updatedEntities,
      };
    }

    case LOAD_TRANSACTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getTransactionsEntities = (state: TransactionsState) => state.entities;
export const getTransactionsLoading = (state: TransactionsState) => state.loading;
export const getTransactionsLoaded = (state: TransactionsState) => state.loaded;
