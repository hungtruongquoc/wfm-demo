import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import {ShareComponentModule} from '../../components/share-component.module';

describe('Login - IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [ShareComponentModule]
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
});
