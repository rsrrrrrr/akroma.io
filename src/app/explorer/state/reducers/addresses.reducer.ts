import { Address } from '../../models/address';
import { Actions, LOAD_ADDRESS_SUCCESS } from '../actions/addresses.actions';

interface AddressEntities {
  [number: string]: Address;
}

export interface AddressesState {
  entities: AddressEntities;
}

export const initialState: AddressesState = {
  entities: {},
};

export function reducer(state = initialState, action: Actions): AddressesState {
  switch (action.type) {
    case LOAD_ADDRESS_SUCCESS: {
      const address = action.payload;
      const updatedEntities = {
        ...state.entities,
        [address.hash]: address,
      };

      return {
        ...state,
        entities: updatedEntities,
      };
    }
  }

  return state;
}

export const getAddressEntities = (state: AddressesState) => state.entities;
