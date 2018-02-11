import { createSelector } from '@ngrx/store';

import { Block } from '../../models/block';
import { ExplorerState, getExplorerState } from '../reducers';
import * as fromBlocks from '../reducers/blocks.reducer';

export const getBlocksState = createSelector(
  getExplorerState,
  (state: ExplorerState) => state.blocks,
);

export const getBlocksEntities = createSelector(
  getBlocksState,
  fromBlocks.getBlocksEntities,
);

export const getBlocksLoaded = createSelector(
  getBlocksState,
  fromBlocks.getBlocksLoaded,
);

export const getBlocksLoading = createSelector(
  getBlocksState,
  fromBlocks.getBlocksLoading,
);

export const getLast10Blocks = createSelector(
  getBlocksEntities,
  (entities): Block[] =>
    Object
      .values(entities)
      .sort((a, b) => {
        if (a.number < b.number) { return 1; }
        if (a.number > b.number) { return -1; }
        return 0;
      })
      .slice(0, 10),
);
