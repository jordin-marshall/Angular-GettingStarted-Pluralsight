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
  filteredProducts: IProduct[] = []
  pageTitle: string = 'Product List'
  products: IProduct[] = productData
  showImage: boolean = false


  private _listFilter: string = ''

  get listFilter(): string { return this._listFilter }
  set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.filterProducts()
  }

  filterProducts(): IProduct[] {
    return this.products.filter(
      (product: IProduct) => product.productName.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase())
    )
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  ngOnInit(): void {
    this.filteredProducts = this.products
  }
}
