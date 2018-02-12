import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';
import { HexToAsciiPipe } from '../../pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from '../../pipes/unix-timestamp-to-date.pipe';
import * as fromExplorer from '../../state/reducers';

import { AddressDetailsComponent } from './address-details.component';

describe('AddressDetailsComponent', () => {
  let component: AddressDetailsComponent;
  let fixture: ComponentFixture<AddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
        ],
        declarations: [
          AddressDetailsComponent,
          HexToAsciiPipe,
          UnixTimestampToDatePipe,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
