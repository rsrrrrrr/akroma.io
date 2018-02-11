import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Block } from '../../models/block';
import { State } from '../../state/reducers';
import { getSelectedBlockByBlockNumberOrHash } from '../../state/selectors/blocks.selectors';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockDetailsComponent implements OnInit {
  block$: Observable<Block>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.block$ = this.store.select(getSelectedBlockByBlockNumberOrHash);
  }
}
