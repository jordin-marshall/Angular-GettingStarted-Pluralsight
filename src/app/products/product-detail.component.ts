import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  pageTitle: string = 'Product Detail'

  ngOnInit(): void {
  }

}