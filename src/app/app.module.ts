import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProductModule } from './products/product.module';
import { CustomerModule } from './customers/customer.module';
import { AppRouterModule } from './config/app-router.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule, // .config/app-router.module.ts defined the route.
    ProductModule,
    CustomerModule,

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
