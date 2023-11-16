import { Component } from "@angular/core";
import productData from "./../api/products/products.json"


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  imageWidth: number = 50
  imageMargin: number = 2
  pageTitle: string = 'Product List'
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
  showImage: boolean = false


  toggleImage(): void {
    this.showImage = !this.showImage
  }
}
