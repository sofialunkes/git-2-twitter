import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginG2tComponent } from './login-g2t/login-g2t.component';
import { HomeComponent } from './home/home.component';
import { routing } from './g2t-routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginG2tComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
