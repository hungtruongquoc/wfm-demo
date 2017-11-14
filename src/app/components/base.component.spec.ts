import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
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

  it('should have a property "title" and to be "No Name" by default', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toBe('No Name');
  });

  it('can update "title" value', () => {
    expect(component.title).toBe('No Name');
    component.title = 'New Name';
    expect(component.title).toBe('New Name');
  });

  it('should have a "loadingMessage" property and have value "Loading" by default', () => {
    expect(component.loadingMessage).toBeDefined();
    expect(component.loadingMessage).toBe('Loading');
  });

  it('can update "loadingMessage" value', () => {
    expect(component.loadingMessage).toBe('Loading');
    component.loadingMessage = 'Waiting';
    expect(component.loadingMessage).toBe('Waiting');
  });
});
