import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AddressesService } from '../services/addresses.service';
import { LoadAddressSuccess } from '../state/actions/addresses.actions';
import { State } from '../state/reducers';

@Injectable()
export class AddressExistsGuard implements CanActivate {
  constructor(
    private store: Store<State>,
    private addressesService: AddressesService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasAddressInApi(route.params.addressHash);
  }

  private hasAddressInApi(addressHash: string): Observable<boolean> {
    return this.addressesService
      .getAddress(addressHash)
      .pipe(
        map(addressEntity => new LoadAddressSuccess(addressEntity)),
        tap((action) => this.store.dispatch(action)),
        map(address => !!address),
        catchError(() => {
          this.router.navigate(['/explorer']);

          return of(false);
        }),
      );
  }
}
