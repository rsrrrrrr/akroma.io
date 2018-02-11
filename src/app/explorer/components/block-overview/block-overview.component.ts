import { Component, Input } from '@angular/core';

import { Block } from '../../models/block';

@Component({
  selector: 'app-block-overview',
  templateUrl: './block-overview.component.html',
  styleUrls: ['./block-overview.component.scss'],
})
export class BlockOverviewComponent {
  @Input() block: Block;
}
