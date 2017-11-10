import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BaseComponent} from './base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import {BaseSmartComponent} from './base-smart.component';

@NgModule({
  imports: [
    NgbModule
  ],
  declarations: [
    BaseComponent,
    BaseSmartComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  exports: [
    NotFoundComponent,
    LoadingComponent,
    BaseComponent,
    BaseSmartComponent
  ]

})
export class ShareComponentModule { }
