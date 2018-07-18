import { NgModule } from '@angular/core';

import { ProductionListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductionListComponent,
    ProductDetailComponent,
    ProductEditComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
