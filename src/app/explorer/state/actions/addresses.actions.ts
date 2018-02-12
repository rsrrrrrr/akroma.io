import { Action } from '@ngrx/store';

import { Address } from '../../models/address';

export const LOAD_ADDRESS_SUCCESS = '[Explorer] Load Address Success';

export class LoadAddressSuccess implements Action {
  readonly type = LOAD_ADDRESS_SUCCESS;

  constructor(public payload: Address) { }
}

export type Actions =
  | LoadAddressSuccess;
