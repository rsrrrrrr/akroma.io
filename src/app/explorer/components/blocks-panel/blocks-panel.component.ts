import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Block } from '../../models/block';
import { LoadBlocks } from '../../state/actions/blocks.actions';
import { State } from '../../state/reducers';
import { getLast10Blocks } from '../../state/selectors/blocks.selectors';

@Component({
  selector: 'app-blocks-panel',
  templateUrl: './blocks-panel.component.html',
  styleUrls: ['./blocks-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksPanelComponent implements OnInit {
  blocks$: Observable<Block[]>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadBlocks());

    this.blocks$ = this.store.select(getLast10Blocks);
  }

  trackBlock(index, block: Block) {
    return block ? block.number : undefined;
  }
}
