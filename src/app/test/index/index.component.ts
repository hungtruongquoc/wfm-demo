import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {IAppState, ManagementUnit} from '../../store/models';
import {BaseSmartComponent} from '../../components/base-smart.component';


@Component({
  selector: 'test-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseSmartComponent implements OnInit {
  constructor(store: NgRedux<IAppState>, router: Router, protected managementUnit: ManagementUnit) {
    super(store, router);
    this.title = 'Test';
  }

  @select('test')
  readonly visitCounts: Observable<number>;

  ngOnInit() {
    this.managementUnit.getAll();
  }

  get MuList() {
    return this.managementUnit.items;
  }
}
