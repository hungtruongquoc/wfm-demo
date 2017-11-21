import { Component, OnInit, OnDestroy } from '@angular/core';
import {BaseComponent} from './base.component';
import {dispatch, NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../store/models';
import {VISITED} from '../shared/actions';
import {Router, NavigationEnd, Event} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  template: ' '
})
export class BaseSmartComponent extends BaseComponent implements OnInit, OnDestroy {

  @select() protected readonly isLoading$: Observable<boolean>;

  protected navigationEndSub: Subscription;

  constructor(protected store: NgRedux<IAppState>, protected router: Router) {
    super();
    this.markVisited();
  }

  protected markVisited() {
    this.navigationEndSub = this.router.events.filter((value: Event) => {
      return value instanceof NavigationEnd;
    }).subscribe(() => {
      this.sendVisitInfo();
    });
  }

  @dispatch() sendVisitInfo = () => ({type: VISITED, payload: this.title});

  ngOnInit() {}

  ngOnDestroy() {
    // This unsubscription makes sure that we don't leave memory leak when a component is destroyed
    // but the event is stilled intact
    this.navigationEndSub.unsubscribe();
  }
}
