import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {TimeOffRoutingModule} from './timeoff-routing.module';
import {ShareComponentModule} from '../components/share-component.module';

@NgModule({
  imports: [
    CommonModule,
    TimeOffRoutingModule,
    ShareComponentModule
  ],
  declarations: [IndexComponent]
})
export class TimeOffModule { }
