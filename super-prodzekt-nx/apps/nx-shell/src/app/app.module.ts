import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { SharedDataAccessUserModule } from '@super-prodzekt-nx/shared/data-access-user';
import { NavbarModule } from '../../../../libs/shared/ui/src/lib/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedDataAccessUserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('handlownia/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'account',
          loadChildren: () =>
            import('account/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'documentation',
          loadChildren: () =>
            import('documentation/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'user-details',
          loadChildren: () =>
            import('user-details/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      {
        initialNavigation: 'enabledBlocking',
        scrollPositionRestoration: 'top',
      }
    ),
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
