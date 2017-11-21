import { Component } from '@angular/core';
// import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import {dispatch, NgRedux, select} from '@angular-redux/store';
import {AppState} from './store/models';
import {Observable} from 'rxjs/Observable';
import {GLOBAL_LOADING_COMPLETED} from './shared/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @select(state => state.visitCounts()) protected readonly visitedCount: Observable<number>;
  @select() protected readonly isLoading$: Observable<boolean>;
  title = 'Embedded App';

  protected navItemClick(event) {
    const button: HTMLAnchorElement = event.target;
    if (button.className.indexOf('disabled') > -1) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
  }

  constructor(private store: NgRedux<AppState>) {

    this.isLoading$.subscribe((value: boolean) => { this._progressBarDisplayed = value; });

    setTimeout(() => { this.markGlobalLoadingCompleted(); }, 10000);
  }

  // Property for showing/hiding the global progress bar
  protected _progressBarDisplayed = true;

  set progressBarDisplayed(show: boolean) {
    this._progressBarDisplayed = show;
  }

  get progressBarDisplayed(): boolean {
    return this._progressBarDisplayed;
  }

  protected getPageVisit(pageName: string): Observable<string> {
    return this.store.select(state => state.pages[pageName]);
  }

  @dispatch() protected markGlobalLoadingCompleted = () => ({type: GLOBAL_LOADING_COMPLETED});

}
