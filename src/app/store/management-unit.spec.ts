import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {fakeAsync, inject, TestBed} from '@angular/core/testing';

import { ManagementUnit, ManagementUnitModel } from './management-unit';
import {NiceDataService} from '../services';

describe('Management Unit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        NiceDataService,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });
  it('should add new management unit', () => {
    inject([ManagementUnit, MockBackend], fakeAsync((managementUnit, mockBackend) => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('http://localhost:3000/mus');
        c.mockRespond(new ResponseOptions({body: []}));
      });
      managementUnit.getAll();
    }));
  });
});

