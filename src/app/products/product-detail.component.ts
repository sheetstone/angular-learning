import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts()
      .subscribe(products => {
        this.product = products.find(element => {
          return element.productId === id;
        });
      });

    this.pageTitle += `: ${this.product.productName}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
