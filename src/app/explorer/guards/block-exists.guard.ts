import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import { BlocksService } from '../services/blocks.service';
import { LoadBlockSuccess } from '../state/actions/blocks.actions';
import { State } from '../state/reducers';
import * as fromBlocks from '../state/selectors/blocks.selectors';

@Injectable()
export class BlockExistsGuard implements CanActivate {
  constructor(
    private store: Store<State>,
    private blocksService: BlocksService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasBlock(route.params.blockId);
  }

  private hasBlock(blockId: number | string): Observable<boolean> {
    return this
      .hasBlockInStore(blockId)
      .pipe(
        switchMap(isInStore => {
          if (isInStore) { return of(isInStore); }

          return this.hasBlockInApi(blockId);
        }),
      );
  }

  private hasBlockInStore(blockId: number | string): Observable<boolean> {
    return this.store
      .select(fromBlocks.getBlocksEntities)
      .pipe(
        map(entities => !!(entities[blockId] || Object.values(entities).find(block => block.hash === blockId))),
        take(1),
      );
  }

  private hasBlockInApi(blockId: number | string): Observable<boolean> {
    return this.blocksService
      .getBlock(blockId)
      .pipe(
        map(blockEntity => new LoadBlockSuccess(blockEntity)),
        tap((action) => this.store.dispatch(action)),
        map(block => !!block),
        catchError(() => {
          this.router.navigate(['/explorer']);

          return of(false);
        }),
      );
  }
}
