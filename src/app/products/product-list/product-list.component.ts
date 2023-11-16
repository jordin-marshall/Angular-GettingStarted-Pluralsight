import { Component } from "@angular/core";
import { IProduct } from "../product";
import { ProductService } from "../product.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {

  constructor(private productService: ProductService) {}

  errorMessage: string = ''
  imageWidth: number = 50
  imageMargin: number = 2
  filteredProducts: IProduct[] = []
  pageTitle: string = 'Product List'
  products: IProduct[] = []
  showImage: boolean = false
  sub!: Subscription


  private _listFilter: string = ''

  get listFilter(): string { return this._listFilter }
  set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.filterProducts()
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => this.filteredProducts = this.products = products,
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
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
