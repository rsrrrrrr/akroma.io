import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../core/state/reducers';
import { BlocksService } from '../services/blocks.service';
import * as fromExplorer from '../state/reducers';

import { BlockExistsGuard } from './block-exists.guard';

describe('BlockExistsGuard', () => {
  let guard: BlockExistsGuard;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
          RouterTestingModule,
        ],
        providers: [
          { provide: BlocksService, useValue: new BlocksService(null) },
          BlockExistsGuard,
        ],
      });
  });

  beforeEach(() => {
    guard = TestBed.get(BlockExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
