import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProductService {
  private _productURL: string = 'http://localhost:3000/products';

  constructor(private _httpService: Http) {}

  getProducts(): Observable<Array<IProduct>> {
    return this._httpService.get(this._productURL)
      .do((res: Response) => console.log(`GET query to '${res.url}':'${res.status}'`))
      .map(res => res.json())
      .catch(this._handleError('Product was not found'));
  }

  get(id: string): Observable<IProduct> {
    return this._httpService.get(this._productURL + '/' + id)
      .do((res: Response) => console.log(`GET query to '${res.url}':'${res.status}'`))
      .map(res => res.json())
      .catch(this._handleError('Product was not found'));
  }

  private _handleError(errorMessage: string) {
    return (error: any): Observable<Error> => {
      console.error(errorMessage, error);
      return Observable.throw(new Error(error));
    };
  }

}
