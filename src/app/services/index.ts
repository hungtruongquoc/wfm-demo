import {Injectable} from '@angular/core';
// import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import {Observable} from "rxjs/Observable";

// import {Observable} from "rxjs/Observable";

@Injectable()
export abstract class BaseService {
  constructor(protected http: HttpClient) {

  }
}

@Injectable()
export class NiceDataService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  // private getManagementUnitApiUrl() {
  //   return 'http://172.25.111.19/TV4/services/rs/mus/selector';
  // }

  get ManagementUnits() {
    const req = new HttpRequest('GET', 'http://172.25.111.19/TV4/services/rs/mus/selector', null, {
      reportProgress: true,
      responseType: 'json'
    });
    const cookieUrl = 'http://172.25.111.19/delegate/forwarderServlet/process.do?url=http://172.25.111.19/TV4/services/rs/system/config&initpage=http://172.25.111.19/TV4/services/rs/auth/platform/sso&appid=TV4';
    // const cookieReq = new HttpRequest('GET', cookieUrl, null, {reportProgress: true, responseType: 'text'});
    return this.http.get(cookieUrl).flatMap(function (pageInfo) {
      if (pageInfo.hasOwnProperty('entityType') && pageInfo.entityType === 'mus') {
        return this.http.request(req);
      }
    }.bind(this));
  }
}

@Injectable()
export class TimeOffService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }


  getTimeOffBiddingList(): Observable<any[]> {
    return this.http.get('http://172.25.111.19/tv4/services/rs/schedules/change-requests/timeoff-bidding-order/2c99ef93616beaa801616c02f4800008')
      .map((resp: any) => resp.json())
      .catch(error => {
        return Observable.of([]).map(() => []);
      });
  }
}
