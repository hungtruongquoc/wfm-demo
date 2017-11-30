import {Injectable} from '@angular/core';
// import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import {HttpClient, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
// import {Observable} from "rxjs/Observable";

@Injectable()
export class NiceDataService {
  constructor(private environment: any, private http: HttpClient) {}

  // private getManagementUnitApiUrl() {
  //   return 'http://172.25.111.19/TV4/services/rs/mus/selector';
  // }

  get ManagementUnits() {
    const req = new HttpRequest('GET', 'http://172.25.111.19/TV4/services/rs/mus/selector', null, {reportProgress: true, responseType: 'json'});
    const cookieUrl = 'http://172.25.111.19/delegate/forwarderServlet/process.do?url=http://172.25.111.19/TV4/services/rs/system/config&initpage=http://172.25.111.19/TV4/services/rs/auth/platform/sso&appid=TV4';
    // const cookieReq = new HttpRequest('GET', cookieUrl, null, {reportProgress: true, responseType: 'text'});
    return this.http.get(cookieUrl).flatMap(function (pageInfo) {
      if (pageInfo.hasOwnProperty('entityType') && pageInfo.entityType === 'mus') {
        return this.http.request(req);
      }
    }.bind(this));
  }
}
