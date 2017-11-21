import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import {NgbModule, NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {Subject} from 'rxjs/Subject';
import {AppState, IAppState} from './store/models';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
        NgReduxTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
          NgbProgressbarConfig
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    // Reset the mock to start from a clean slate in each unit test.
    MockNgRedux.reset();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Embedded App'`, async(() => {
    expect(app.title).toEqual('Embedded App');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Embedded App');
  }));

  it('should show hide the global progress bar', (done) => {
    // Get a stub we can use to drive the `@select('count')` observable used by
    // MyComponent (above). This stub will be supplied to any relevant `.select`
    // or `@select` calls used by the component under test by MockNgRedux.
    const countStub: Subject<boolean> = MockNgRedux.getSelectorStub<IAppState, boolean>('isLoading');
    app.isLoading$.subscribe((value) => {
      expect(value).toBeTruthy();
    }, null, done);
    // Drive value through our stub.
    countStub.next(true);
    countStub.complete();
  });
});
