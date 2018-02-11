import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../../models/transaction';
import { LoadTransactions } from '../../state/actions/transactions.actions';
import { State } from '../../state/reducers';
import { getLast10Transactions } from '../../state/selectors/transactions.selectors';

@Component({
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPanelComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadTransactions());

    this.transactions$ = this.store.select(getLast10Transactions);
  }

  trackTransaction(index, transaction: Transaction) {
    return transaction ? transaction.hash : undefined;
  }
}
