import { Transaction } from './transaction';

export interface Address {
  hash: string;
  balance: number;
  mined: number;
  transactionsInitiatedCount: number;
  transactions: Transaction[];
}
