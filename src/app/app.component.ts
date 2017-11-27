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
  @select() readonly isLoading$: Observable<boolean>;
  title = 'Embedded App';
  // Property for showing/hiding the global progress bar
  protected _progressBarDisplayed = true;

  constructor(private store: NgRedux<AppState>) {
    this.isLoading$.subscribe((value: boolean) => { this._progressBarDisplayed = value; });
    setTimeout(() => { this.markGlobalLoadingCompleted(); }, 10000);
  }

  set progressBarDisplayed(show: boolean) {
    this._progressBarDisplayed = show;
  }

  get progressBarDisplayed(): boolean {
    return this._progressBarDisplayed;
  }

  getPageVisit(pageName: string): Observable<string> {
    return this.store.select(state => state.pages[pageName]);
  }

  get visitCount(): Observable<number> {
    return this.store.select(state => state.visitCounts());
  }

  @dispatch() protected markGlobalLoadingCompleted = () => ({type: GLOBAL_LOADING_COMPLETED});
}
