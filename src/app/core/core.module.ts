import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { AkromaRouterStateSerializer, reducers } from './state/reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    CoreRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
class CoreRootModule { }

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreRootModule,
      providers: [
        { provide: RouterStateSerializer, useClass: AkromaRouterStateSerializer },
      ],
    };
  }
}
