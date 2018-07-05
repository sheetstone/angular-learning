import { NgModule } from '@angular/core';

import { ProductionListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ProductionListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
