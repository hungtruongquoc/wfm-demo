import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule } from '@angular-redux/store/testing';

import { IndexComponent } from './index.component';
import {ShareComponentModule} from '../../components/share-component.module';



describe('Login - IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [ShareComponentModule, NgReduxTestingModule, RouterTestingModule],
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

  it('should have a property "title" and to be "Login" by default', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toBe('Login');
  });

  it('should have a "loadingMessage" property and have value "Loading" by default', () => {
    expect(component.loadingMessage).toBeDefined();
    expect(component.loadingMessage).toBe('Loading');
  });
});
