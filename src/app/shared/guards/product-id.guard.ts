import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductIdGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = Number(next.paramMap.get('id'));
    if (isNaN(id) || id < 0) {
      // console.error & redirect
      console.log('id is not a number!!!');
      this._router.navigateByUrl('/products');
      return false;
    }

    return true;
  }
}
