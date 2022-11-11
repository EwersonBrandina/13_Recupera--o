import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//imports
import { FormBuilder } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
//imports

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],//imports
  providers: [FormBuilder, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],//imports
  bootstrap: [AppComponent],
})
export class AppModule {}
