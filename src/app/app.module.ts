import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgReduxModule} from '@angular-redux/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {ShareComponentModule} from './components/share-component.module';
import {StoreModule} from './store/store.module';
import {HttpClientModule} from '@angular/common/http';
import {ManagementUnit} from './store/models';
import {NiceDataService} from './services';
import {TimeOffModule} from './timeoff/timeoff.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ShareComponentModule,
    NgReduxModule,
    StoreModule,
    HttpClientModule,
    TimeOffModule
  ],
  providers: [
    ManagementUnit,
    NiceDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
