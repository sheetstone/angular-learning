import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductionListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces';
import { StarComponent } from '../shared/star.component';
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
