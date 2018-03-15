import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';

import { PromoService } from './services/promo.service';

import { environment } from '../environments/environment';


@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      AngularFireModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [
      PromoService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  