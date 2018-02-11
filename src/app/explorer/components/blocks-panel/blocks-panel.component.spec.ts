import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';
import * as fromExplorer from '../../state/reducers';

import { BlocksPanelComponent } from './blocks-panel.component';

describe('BlocksPanelComponent', () => {
  let component: BlocksPanelComponent;
  let fixture: ComponentFixture<BlocksPanelComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
        ],
        declarations: [
          BlocksPanelComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
