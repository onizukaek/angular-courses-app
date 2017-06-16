import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product-list/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filter: string): IProduct[] {
    filter = filter.toLowerCase();
    return products.filter(
      product => product.productName.toLowerCase().startsWith(filter)
    );
  }

}
