import { Component } from "@angular/core";
import productData from "./../api/products/products.json"


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = 'Product List'
  car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  products: {
    productId: number
    productName: string
    productCode: string
    releaseDate: string
    description: string
    price: number
    starRating: number
    imageUrl: string
  }[] = productData
}
