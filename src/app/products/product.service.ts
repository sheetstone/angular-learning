import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/index';
import { tap, map, catchError } from 'rxjs/operators';

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

  getProduct(id: number): Observable<IProduct> {
    if (id === 0) {
      return of(this.initializeProduct());
      // return Observable.create((observer: any) => {
      //     observer.next(this.initializeProduct());
      //     observer.complete();
      // });
    }
    const url = `${this._productUrl}/${id}`;
    return this._http.get<IProduct>(url)
      .pipe(
        catchError(this.handleError),
        tap(_ => console.log(`fetched Json: + ${JSON.stringify(_)}`)),
        // map(this.extractData)
      );

  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
  initializeProduct(): IProduct {
    // Return an initialized object
    return {
      productId: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
  /*
  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }*/
}
