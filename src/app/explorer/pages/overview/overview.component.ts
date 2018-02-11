import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { isValidAddress } from 'ethereumjs-util';

import { Go } from '../../../core/state/actions/navigation.actions';
import { State } from '../../state/reducers';

type Panel = 'blocks' | 'transactions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  lookupForm: FormGroup;
  private activePanel: Panel = 'blocks';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.lookupForm = this.formBuilder.group({
      lookup: this.formBuilder.control(''),
    });
  }

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

  onSubmit() {
    const lookupValue = this.lookupForm.value.lookup;
    const lookupType = this.getLookupType(this.lookupForm.value.lookup);

    if (!lookupType) { return; }

    return this.store.dispatch(new Go({
      path: ['.', lookupType, lookupValue],
      extras: { relativeTo: this.route },
    }));
  }

  private getLookupType(lookupValue: string): string | null {
    if (this.isAddress(lookupValue)) { return 'address'; }
    if (this.isTransaction(lookupValue)) { return 'transaction'; }
    if (this.isBlock(lookupValue)) { return 'block'; }

    return null;
  }

  private isAddress(lookupValue: string): boolean {
    return isValidAddress(lookupValue) || isValidAddress(`0x${lookupValue}`);
  }

  private isTransaction(lookupValue: string): boolean {
    return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
  }

  private isBlock(lookupValue: string): boolean {
    return Number.parseInt(lookupValue, 10).toString(10) === lookupValue;
  }
}
