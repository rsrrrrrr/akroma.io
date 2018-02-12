import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../core/state/reducers';
import { AddressesService } from '../services/addresses.service';
import * as fromExplorer from '../state/reducers';

import { AddressExistsGuard } from './address-exists.guard';

describe('AddressExistsGuard', () => {
  let guard: AddressExistsGuard;

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
          { provide: AddressesService, useValue: new AddressesService(null) },
          AddressExistsGuard,
        ],
      });
  });

  beforeEach(() => {
    guard = TestBed.get(AddressExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
