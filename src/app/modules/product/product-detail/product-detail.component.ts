import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from '../../../shared/models/product.service';
import {IProduct} from '../../../shared/models/product';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  public product: Observable<IProduct>;

  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.product = this._route.data.map(data => data.product);
    // this._route.paramMap
    //   .map((params: ParamMap) => params.get('id'))
    //   .flatMap(id => this._prodServ.get(id))
    //   .subscribe(product => this.product = product);
  }

  getNextProductId(id: number) {
    return id + 1;
  }
}
