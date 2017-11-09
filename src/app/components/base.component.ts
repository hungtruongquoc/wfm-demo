import { Component } from '@angular/core';

@Component({
  template: ''
})
export class BaseComponent {
  protected _isLoading = true;
  protected _title = 'No Name';
  protected _loadingMessage = 'Loading';

  get isLoading() {
    return this._isLoading;
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get loadingMessage() {
    return this._loadingMessage;
  }

  set loadingMessage(value: string) {
    this._loadingMessage = value;
  }
}
