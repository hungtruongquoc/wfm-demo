import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../components/base.component';

@Component({
  selector: 'login-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
    this.title = 'Login';
  }

  ngOnInit() {
  }

}
