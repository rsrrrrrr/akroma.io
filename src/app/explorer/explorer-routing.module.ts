import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressExistsGuard } from './guards/address-exists.guard';
import { BlockExistsGuard } from './guards/block-exists.guard';
import { TransactionExistsGuard } from './guards/transaction-exists.guard';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: 'block/:blockId', component: BlockDetailsComponent, canActivate: [BlockExistsGuard] },
  { path: 'transaction/:transactionHash', component: TransactionDetailsComponent, canActivate: [TransactionExistsGuard] },
  { path: 'address/:addressHash', component: AddressDetailsComponent, canActivate: [AddressExistsGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorerRoutingModule { }
