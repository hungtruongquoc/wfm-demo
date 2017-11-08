import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../components/base.component';

@Component({
  selector: 'test-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {

  protected _title = 'Test';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
