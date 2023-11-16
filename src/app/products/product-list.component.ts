import { Component } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {

  constructor(private productService: ProductService) {}

  imageWidth: number = 50
  imageMargin: number = 2
  filteredProducts: IProduct[] = []
  pageTitle: string = 'Product List'
  products: IProduct[] = []
  showImage: boolean = false


  private _listFilter: string = ''

  get listFilter(): string { return this._listFilter }
  set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.filterProducts()
  }

  ngOnInit(): void {
    this.filteredProducts = this.products = this.productService.getProducts()
  }

  filterProducts(): IProduct[] {
    return this.products.filter(
      (product: IProduct) => product.productName.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase())
    )
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }


}
