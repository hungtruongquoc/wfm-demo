import { Component, OnInit } from '@angular/core';
import {IAppState} from '../../store/models';
import {NgRedux} from '@angular-redux/store';
import {BaseSmartComponent} from '../../components/base-smart.component';
import {Router} from '@angular/router';

@Component({
  selector: 'login-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseSmartComponent implements OnInit {

  constructor(store: NgRedux<IAppState>, router: Router) {
    super(store, router);
    this.title = 'Login';
  }

  ngOnInit() {
  }
}
