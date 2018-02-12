import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';
import { Address } from '../../models/address';
import { ExplorerState, getExplorerState } from '../reducers';
import * as fromAddresses from '../reducers/addresses.reducer';

export const getTransactionsState = createSelector(
  getExplorerState,
  (state: ExplorerState) => state.addresses,
);

export const getAddressEntities = createSelector(
  getTransactionsState,
  fromAddresses.getAddressEntities,
);

export const getSelectedAddress = createSelector(
  getAddressEntities,
  fromRoot.getRouterState,
  (entities, router): Address => router.state && entities[router.state.params.addressHash],
);
