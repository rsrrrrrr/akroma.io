import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule,
    RouterModule,
  ],
  declarations: [
    NavigationComponent,
    FooterComponent,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
