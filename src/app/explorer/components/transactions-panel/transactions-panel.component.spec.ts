import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';
import * as fromExplorer from '../../state/reducers';

import { TransactionsPanelComponent } from './transactions-panel.component';

describe('TransactionsPanelComponent', () => {
  let component: TransactionsPanelComponent;
  let fixture: ComponentFixture<TransactionsPanelComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
        ],
        declarations: [TransactionsPanelComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
