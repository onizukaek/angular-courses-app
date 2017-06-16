import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Array<IProduct> = [
    {
      'id': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': new Date('March 19, 2016'),
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      'id': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': new Date('March 18, 2016'),
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      'id': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': new Date('May 21, 2016'),
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    },
    {
      'id': 8,
      'productName': 'Saw',
      'productCode': 'TBX-0022',
      'releaseDate': new Date('May 15, 2016'),
      'description': '15-inch steel blade hand saw',
      'price': 11.55,
      'starRating': 3.7,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    },
    {
      'id': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'releaseDate': new Date('October 15, 2015'),
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    }
  ];

  displayImg = true;
  toggleText = 'Hide Images';
  listFilter = 'cart';

  constructor() { }

  ngOnInit() {
    console.log('Product list Init!!!!!!');
  }


  toggleImage(): void {
    this.displayImg = !this.displayImg;
    this.toggleText = this.displayImg ? 'Hide Images' : 'Display Images';
  }
}
