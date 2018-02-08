import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import {ActionsObservable, createEpicMiddleware, Epic} from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {StoreAction, StoreActions} from "./app.action";
import {AppState} from "./models";
import {TimeOffService} from "../services";
import {of} from "rxjs/observable/of";

const BASE_URL = '/api';

@Injectable()
export class TimeOffEpics {
  constructor(private service: TimeOffService, private actions: StoreActions) {

  }


  public createEpic() {
    return createEpicMiddleware(this.createLoadTimeOffBiddingListEpic());
  }

  private createLoadTimeOffBiddingListEpic(): Epic<StoreAction, AppState> {
    return (action$, store) => {
      return action$.ofType(StoreActions.LOAD_TIMEOFF_BIDDING)
        .switchMap(() => {
          return this.service.getTimeOffBiddingList().map((data) => {
            data = [
              {
                agentOid: '123343wawd',
                agentName: 'Test 1',
                agentId: '1300',
                actualBiddingOrder: 1,
                timeTaken: 10,
                newBiddingOrder: 2,
                difference: (2 - 1)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 2',
                agentId: '12000',
                actualBiddingOrder: 2,
                timeTaken: 5,
                newBiddingOrder: 3,
                difference: (3 - 2)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 1',
                agentId: '1300',
                actualBiddingOrder: 1,
                timeTaken: 10,
                newBiddingOrder: 2,
                difference: (2 - 1)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 2',
                agentId: '12000',
                actualBiddingOrder: 2,
                timeTaken: 5,
                newBiddingOrder: 3,
                difference: (3 - 2)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }, {
                agentOid: '123343wawd',
                agentName: 'Test 3',
                agentId: '12001',
                actualBiddingOrder: 3,
                timeTaken: 5,
                newBiddingOrder: 2,
                difference: (2 - 3)
              }];
            return this.actions.loadTimeOffBiddingSuccess(data);
          }).catch(error => of(this.actions.loadTimeOffBiddingFailed(error)));
        });
    };
  }
}

@Injectable()
export class RootEpics {
  constructor(
    private storeEpics: TimeOffEpics
  ) {}

  public createEpics() {
    return [
      this.storeEpics.createEpic()
    ];
  }
}
