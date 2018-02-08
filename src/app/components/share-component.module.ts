import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BaseComponent} from './base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import {BaseSmartComponent} from './base-smart.component';
import {
  MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    NgbModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]

})
export class ShareComponentModule { }
