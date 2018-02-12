import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Address } from '../../models/address';
import { State } from '../../state/reducers';
import { getSelectedAddress } from '../../state/selectors/addresses.selectors';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressDetailsComponent implements OnInit {
  address$: Observable<Address>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.address$ = this.store.select(getSelectedAddress);
  }
}
