import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { DataService} from './data.service';
import { UserComponent } from './user/user.component';
import { LoadingComponent } from './loading/loading.component';
import { UserDComponent } from './user/user-d/user-d.component';
import { TestDirective } from './test.directive';
import { WorkComponent,Child } from './work/work.component';
import { TestPipe,JobPipe } from './test.pipe';

// // AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavListComponent,
    PhoneListComponent,
    PhoneComponent,
    PhoneDetailComponent,
    UserComponent,
    LoadingComponent,
    UserDComponent,
    TestDirective,
    WorkComponent,
    Child,
    TestPipe,
    JobPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useFactory: HttpLoaderFactory,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
