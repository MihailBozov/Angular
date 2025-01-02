import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { UserModule } from './modules/user/user.module';
import { ThemeModule } from './modules/theme/theme.module';
import { ErrorComponent } from './components/error/error.component';
import { appInterceptorProvider } from './app.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
