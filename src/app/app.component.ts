import { Component } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Embedded App';

  // Property for showing/hiding the global progress bar
  protected _progressBarDisplayed = true;

  set progressBarDisplayed(show: boolean) {
    this._progressBarDisplayed = show;
  }

  get progressBarDisplayed(): boolean {
    return this._progressBarDisplayed;
  }

}
