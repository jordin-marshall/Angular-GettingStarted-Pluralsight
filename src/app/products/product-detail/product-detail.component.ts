import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  errorMessage = ''
  pageTitle: string = 'Product Detail'
  product: IProduct | undefined

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(id) {
      this.getProduct(id)
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
