import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {IAppState} from '../../store/models';

import {BaseSmartComponent} from '../../components/base-smart.component';
import {Router} from '@angular/router';

@Component({
  selector: 'test-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseSmartComponent implements OnInit {
  constructor(store: NgRedux<IAppState>, router: Router) {
    super(store, router);
    this.title = 'Test';
  }

  @select('test')
  readonly visitCounts: Observable<number>;

  ngOnInit() {
  }
}
