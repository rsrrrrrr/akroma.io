import { Action } from '@ngrx/store';

import { Block } from '../../models/block';

export const LOAD_BLOCKS = '[Explorer] Load Blocks';
export const LOAD_BLOCKS_FAIL = '[Explorer] Load Blocks Fail';
export const LOAD_BLOCKS_SUCCESS = '[Explorer] Load Blocks Success';

export class LoadBlocks implements Action {
  readonly type = LOAD_BLOCKS;
}

export class LoadBlocksFail implements Action {
  readonly type = LOAD_BLOCKS_FAIL;

  constructor(public payload: any) { }
}

export class LoadBlocksSuccess implements Action {
  readonly type = LOAD_BLOCKS_SUCCESS;

  constructor(public payload: Block[]) { }
}

export type Actions =
  | LoadBlocks
  | LoadBlocksFail
  | LoadBlocksSuccess;
