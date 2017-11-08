import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfm-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  private _message = 'Loading';

  constructor() { }

  ngOnInit() {
  }

  get message() {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

}
