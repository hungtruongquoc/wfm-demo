import { Component, OnInit } from '@angular/core';
import {IAppState} from '../../store/models';
import {NgRedux} from '@angular-redux/store';
import {VISITED} from '../../shared/actions';
import {BaseSmartComponent} from '../../components/base-smart.component';

@Component({
  selector: 'login-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseSmartComponent implements OnInit {

  constructor(store: NgRedux<IAppState>) {
    super(store);
    this.title = 'Login';
    store.dispatch({type: VISITED, payload: 'login'});
  }

  ngOnInit() {
  }
}
