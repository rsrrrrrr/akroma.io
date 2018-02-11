import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockExistsGuard } from './guards/block-exists.guard';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: 'block/:blockId', component: BlockDetailsComponent, canActivate: [BlockExistsGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorerRoutingModule { }
