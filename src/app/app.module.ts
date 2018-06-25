import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './config/app-router.module';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ErrorpageComponent,
    CustomersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
