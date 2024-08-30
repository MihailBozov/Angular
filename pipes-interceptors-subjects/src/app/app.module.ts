import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducePipe } from './pipes/reduce.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SumPipe } from './pipes/sum.pipe';
import { HttpClientModule } from '@angular/common/http';
import { appHttpInterceptorProvider } from './interceptors/app-http.interceptor';
import { HomeComponent } from './components/home/home.component';
import { LazyModule } from './modules/lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    ReducePipe,
    TruncatePipe,
    SumPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyModule
  ],
  providers: [appHttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
