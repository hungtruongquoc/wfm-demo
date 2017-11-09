import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule } from '@angular-redux/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {ShareComponentModule} from './components/share-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ShareComponentModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
