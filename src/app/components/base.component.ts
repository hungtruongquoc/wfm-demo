import { Component } from '@angular/core';

@Component({
  template: ''
})
export class BaseComponent {
  protected _isLoading = true;
  protected _title = 'No Name';

  get isLoading() {
    return this._isLoading;
  }

  get title() {
    return this._title;
  }
}
