import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../../models/transaction';
import { State } from '../../state/reducers';
import { getSelectedTransaction } from '../../state/selectors/transactions.selectors';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsComponent implements OnInit {
  transaction$: Observable<Transaction>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.transaction$ = this.store.select(getSelectedTransaction);
  }
}
