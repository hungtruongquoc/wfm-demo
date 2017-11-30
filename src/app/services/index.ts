import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NiceDataService {
  constructor(private environment: any, private http: HttpClient) {}

  private getManagementUnitApiUrl() {
    return 'http://172.25.111.19/TV4/services/rs/mus/selector';
  }

  get ManagementUnits() {
    const req = new HttpRequest('GET', 'http://172.25.111.19/TV4/services/rs/mus/selector', null, {reportProgress: true, responseType: 'json'});
    const cookieUrl = 'http://172.25.111.19/delegate/forwarderServlet/process.do?url=http://172.25.111.19/TV4/services/rs/system/config&initpage=http://172.25.111.19/TV4/services/rs/auth/platform/sso&appid=TV4';
    const cookieReq = new HttpRequest('GET', cookieUrl, null, {reportProgress: true, responseType: 'text'});
    console.log(cookieReq);
    return this.http.get(cookieUrl).flatMap(function (args) {
      console.log(args);
      console.log(arguments);
      debugger;
      console.log(req);
      return this.http.request(req);
    });
  }
}
