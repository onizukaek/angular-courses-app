import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../models/product.service';

@Injectable()
export class ProductDetailResolve implements Resolve<IProduct> {

  constructor(private _prodServ: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct> {
    console.log(Number(route.paramMap.get('id')));
    return this._prodServ.get(Number(route.paramMap.get('id')));
  }
}
