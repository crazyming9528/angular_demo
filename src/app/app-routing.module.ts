import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PhoneComponent} from './phone/phone.component';
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';
import {UserComponent} from './user/user.component';
import {WorkComponent} from './work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'phone',
    component: PhoneComponent,
    children: [
      {
        path: 'detail/:name',
        component: PhoneDetailComponent,
      }

    ]
  },{

    path: 'user',
    component: UserComponent,

  },
  {

    path: 'work',
    component: WorkComponent,

  }
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
