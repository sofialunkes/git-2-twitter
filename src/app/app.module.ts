import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { G2tLoginComponent } from './g2t-login/g2t-login.component';
import { HomeComponent } from './home/home.component';
import { G2tMaterialModule } from './g2t-material/g2t-material.module';

import { routing } from './g2t-routes';


@NgModule({
  declarations: [
    AppComponent,
    G2tLoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    G2tMaterialModule,
    routing
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
