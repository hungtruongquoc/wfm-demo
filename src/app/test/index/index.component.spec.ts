import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('Test - IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ]
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

  it('should have a property "title" and to be "No Name" by default', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toBe('No Name');
  });
});
