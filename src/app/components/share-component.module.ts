import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BaseComponent} from './base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import {BaseSmartComponent} from './base-smart.component';
import {MatDividerModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    NgbModule,
    MatDividerModule,
    MatTableModule
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
    BaseSmartComponent,
    MatDividerModule,
    MatTableModule
  ]

})
export class ShareComponentModule { }
