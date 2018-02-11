import { Block } from '../../models/block';
import { Actions, LOAD_BLOCKS, LOAD_BLOCKS_FAIL, LOAD_BLOCKS_SUCCESS } from '../actions/blocks.actions';

interface BlockEntities {
  [number: number]: Block;
}

export interface BlocksState {
  entities: BlockEntities;
  loaded: boolean;
  loading: boolean;
}

export const initialState: BlocksState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: Actions): BlocksState {
  switch (action.type) {
    case LOAD_BLOCKS: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_BLOCKS_SUCCESS: {
      const blocks = action.payload;

      const updatedEntities = blocks.reduce((entities: BlockEntities, block: Block) => {
        return {
          ...entities,
          [block.number]: block,
        };
      }, { ...state.entities });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities: updatedEntities,
      };
    }

    case LOAD_BLOCKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getBlocksEntities = (state: BlocksState) => state.entities;
export const getBlocksLoading = (state: BlocksState) => state.loading;
export const getBlocksLoaded = (state: BlocksState) => state.loaded;
