import { Component } from '@angular/core';
import {BaseComponent} from './base.component';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store/models';

@Component({
  template: ' '
})
export class BaseSmartComponent extends BaseComponent {
  constructor(protected store: NgRedux<IAppState>) {
    super();
  }
}
