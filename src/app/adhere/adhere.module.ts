import { AdhereRoutingModule } from './adhere-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {ShareComponentModule} from '../components/share-component.module';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentModule,
    AdhereRoutingModule
  ],
  declarations: [IndexComponent]
})
export class AdhereModule { }
