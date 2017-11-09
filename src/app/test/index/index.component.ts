import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../components/base.component';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'test-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
    this.title = 'Test';
  }

  @select('test')
  readonly visitCounts: Observable<number>;

  ngOnInit() {
  }

}
