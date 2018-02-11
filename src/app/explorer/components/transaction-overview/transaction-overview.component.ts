import { Component, Input } from '@angular/core';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss'],
})
export class TransactionOverviewComponent {
  @Input() transaction: Transaction;
}
