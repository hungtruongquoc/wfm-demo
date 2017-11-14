import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';


import {BaseSmartComponent} from './base-smart.component';


describe('BaseSmartComponent', () => {
  let component: BaseSmartComponent;
  let fixture: ComponentFixture<BaseSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseSmartComponent],
      imports: [NgReduxTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
