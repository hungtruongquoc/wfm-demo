import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [IndexComponent]
})
export class TestModule { }
