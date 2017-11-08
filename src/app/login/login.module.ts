import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [IndexComponent]
})
export class LoginModule { }
