import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: 'app/test/test.module#TestModule'
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'timeoff',
    loadChildren: 'app/timeoff/timeoff.module#TimeOffModule'
  },
  {
    path: 'adhere',
    loadChildren: 'app/adhere/adhere.module#AdhereModule'
  },
  {
    path: '',
    // children: [],
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
