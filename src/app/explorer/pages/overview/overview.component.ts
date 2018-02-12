import { Component  } from '@angular/core';

type Panel = 'blocks' | 'transactions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  private activePanel: Panel = 'blocks';

  get isBlocksPanelActive() {
    return this.activePanel === 'blocks';
  }

  get isTransactionsPanelActive() {
    return this.activePanel === 'transactions';
  }

  setActivePanel(panel: Panel) {
    if (this.activePanel === panel) { return; }

    this.activePanel = panel;
  }
}
