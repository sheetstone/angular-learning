import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private _productUrl = './api/products/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .pipe(
        catchError(this.handleError),
        // tap(_ => console.log(`fetched Json: + ${JSON.stringify(_)}`))
      );
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
