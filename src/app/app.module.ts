import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './config/app-router.module';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ErrorpageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
