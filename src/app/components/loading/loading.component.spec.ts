import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a "message" property and have default value "Loading"', () => {
    expect(component.message).toBeDefined();
    expect(component.message).toBe('Loading');
  });

  it('should be able to update the "message" property with new value', () => {
    expect(component.message).toBeDefined();
    component.message = 'Test loading';
    expect(component.message).toBe('Test loading');
  });
});
