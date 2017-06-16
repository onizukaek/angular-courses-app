/**
 * Created by hkb on 15.06.17.
 */
export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  // calculateDiscount(percent: number): number;
}
