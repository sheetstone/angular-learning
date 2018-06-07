import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductionListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { ProductDetail } from './product/product-detail.component/product-detail.component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetail.ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
