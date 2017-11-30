import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule } from '@angular-redux/store/testing';

import { IndexComponent } from './index.component';
import {ShareComponentModule} from '../../components/share-component.module';
import {NiceDataService} from '../../services';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ManagementUnit} from '../../store/management-unit';

describe('Test - IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {

    // function createNiceDataService (httpClient: HttpClient) {
    //   return new NiceDataService(environment, httpClient);
    // }

    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [ShareComponentModule, RouterTestingModule, NgReduxTestingModule, HttpClientModule],
      providers: [ManagementUnit, {
        provide: NiceDataService,
        useFactory: (httpClient: HttpClient) => new NiceDataService(environment, httpClient) ,
        deps: [HttpClient]}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property "isLoading" and to be true by default', () => {
    expect(component.isLoading).toBeDefined();
    expect(component.isLoading).toBeTruthy();
  });

  it('should have a property "title" and to be "Test" by default', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toBe('Test');
  });

  it('should have a "loadingMessage" property and have value "Loading" by default', () => {
    expect(component.loadingMessage).toBeDefined();
    expect(component.loadingMessage).toBe('Loading');
  });
});
