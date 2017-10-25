import { Injectable } from "@angular/core";
import { Product } from "./Product";
import { PRODUCTS } from "./mock-products";

@Injectable()
export class ProductService {

    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise(resolve => {
            setTimeout(() => { resolve(this.getProducts()) }, 200);
        });
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts()
            .then(products => products.find(product => product.id === id));
    }

}