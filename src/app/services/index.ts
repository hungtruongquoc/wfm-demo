import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NiceDataService {
  constructor(private environment: any, private http: HttpClient) {}

  private getManagementUnitApiUrl() {
    // For production, we use the original endpoint
    // if (this.environment.production) {
    // return this.environment.apiBaseUrl;
    return 'http://172.25.111.19/TV4/services/rs/mus/selector';
    // }
    // Temporary solution used for now as we don't have a standardized endpoint URLs
    // For development, we attach the string to the base end point
    // return this.environment.apiBaseUrl + '/mus';
  }

  get ManagementUnits() {
    const url = this.getManagementUnitApiUrl();
    const req = new HttpRequest('GET', url, null, {reportProgress: true, responseType: 'json'});
    // if (this.environment.production) {
      // Makes request to set the cookies
      const cookieUrl = 'http://172.25.111.19/delegate/forwarderServlet/process.do?url=http://172.25.111.19/TV4/services/rs/system/config&initpage=http://172.25.111.19/TV4/services/rs/auth/platform/sso&appid=TV4';
      const cookieReq = new HttpRequest('GET', cookieUrl);

      return this.http.request(cookieReq).flatMap((event) => {
        if (event.type === HttpEventType.Response) {
          return this.http.request(req);
        }
      });
    // }
    // else {
    //   return this.http.request(req);
    // }
  }
}
