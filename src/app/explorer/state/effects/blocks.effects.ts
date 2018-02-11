import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BlocksService } from '../../services/blocks.service';
import { LOAD_BLOCKS, LoadBlocksFail, LoadBlocksSuccess } from '../actions/blocks.actions';

@Injectable()
export class BlocksEffects {
  constructor(
    private actions$: Actions,
    private blocksService: BlocksService,
  ) { }

  @Effect()
  loadBlocks$ = this.actions$
    .ofType(LOAD_BLOCKS)
    .pipe(
      switchMap(() => this.blocksService
        .getBlocks()
        .pipe(
          map(blocks => new LoadBlocksSuccess(blocks)),
          catchError(error => of(new LoadBlocksFail(error))),
      )),
  );
}
