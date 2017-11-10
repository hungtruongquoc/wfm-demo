import { Component, OnInit } from '@angular/core';
import {BaseComponent} from './base.component';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store/models';
import {VISITED} from "../shared/actions";

@Component({
  template: ' '
})
export class BaseSmartComponent extends BaseComponent implements OnInit{
  constructor(protected store: NgRedux<IAppState>) {
    super();
  }

  ngOnInit() {
    this.store.dispatch({type: VISITED, payload: this.title});
  }
}
