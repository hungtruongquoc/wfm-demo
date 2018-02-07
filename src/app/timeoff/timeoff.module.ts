import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {TimeOffRoutingModule} from './timeoff-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimeOffRoutingModule
  ],
  declarations: [IndexComponent]
})
export class TimeOffModule { }
