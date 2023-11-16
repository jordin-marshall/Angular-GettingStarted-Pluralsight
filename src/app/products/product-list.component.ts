import { Component } from "@angular/core";
import { IProduct } from "./product";
import productData from "./../api/products/products.json"


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  imageWidth: number = 50
  imageMargin: number = 2
  listFilter: string = ''
  pageTitle: string = 'Product List'
  products: IProduct[] = productData
  showImage: boolean = false


  toggleImage(): void {
    this.showImage = !this.showImage
  }
}
