import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {IAppState} from '../../store/models';
import {VISITED} from '../../shared/actions';
import {BaseSmartComponent} from '../../components/base-smart.component';

@Component({
  selector: 'test-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseSmartComponent implements OnInit {
  constructor(store: NgRedux<IAppState>) {
    super(store);
    this.title = 'Test';
    store.dispatch({type: VISITED, payload: 'test'});
  }

  @select('test')
  readonly visitCounts: Observable<number>;

  ngOnInit() {
  }
}
