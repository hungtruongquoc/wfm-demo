import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NiceDataService {
  constructor(private environment: any, private http: HttpClient) {}

  private getManagementUnitApiUrl() {
    return 'http://172.25.111.19/TV4/services/rs/mus/selector';
  }

  get ManagementUnits() {
    const url = this.getManagementUnitApiUrl();
    const req = new HttpRequest('GET', url, null, {reportProgress: true, responseType: 'json'});
    const cookieUrl = 'http://172.25.111.19/delegate/forwarderServlet/process.do?url=http://172.25.111.19/TV4/services/rs/system/config&initpage=http://172.25.111.19/TV4/services/rs/auth/platform/sso&appid=TV4';
    const cookieReq = new HttpRequest('GET', cookieUrl);
    return this.http.request(cookieReq).flatMap((event) => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        debugger;
        console.log(req);
        return this.http.request(req);
      }
    });
  }
}
