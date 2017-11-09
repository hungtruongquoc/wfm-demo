import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './index/index.component';
import {ShareComponentModule} from '../components/share-component.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareComponentModule,
    NgbModule
  ],
  declarations: [IndexComponent]
})
export class LoginModule { }
