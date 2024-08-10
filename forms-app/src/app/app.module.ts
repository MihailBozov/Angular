import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { MyRouterLinkDirective } from './directives/my-router-link.directive';
import { MyStructuralDirectiveDirective } from './directives/my-structural-directive.directive';
import { FormsModule } from '@angular/forms';
import { MaxCountDirective } from './directives/max-count.directive';


@NgModule({
  declarations: [
    HighlightDirective,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    MyRouterLinkDirective,
    MyStructuralDirectiveDirective,
   MaxCountDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Template Driven Approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
