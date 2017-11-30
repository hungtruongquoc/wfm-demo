import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgReduxModule} from '@angular-redux/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {ShareComponentModule} from './components/share-component.module';
import {StoreModule} from './store/store.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ManagementUnit} from './store/models';
import {NiceDataService} from './services';
import {environment} from '../environments/environment';

function createNiceDataService (httpClient: HttpClient) {
  return new NiceDataService(environment, httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ShareComponentModule,
    NgReduxModule,
    StoreModule,
    HttpClientModule
  ],
  providers: [
    ManagementUnit,
    { provide: NiceDataService, useFactory: createNiceDataService , deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
