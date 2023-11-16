import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import productData from "./../api/products/products.json"

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getProducts(): IProduct[] {
    return productData
  }
}
