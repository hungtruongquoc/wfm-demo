import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { IndexComponent } from './index/index.component';
import {ShareComponentModule} from '../components/share-component.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    ShareComponentModule
  ],
  declarations: [IndexComponent]
})
export class TestModule { }
