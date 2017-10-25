import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./Product";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-root',
    providers: [ProductService],
    template: `
        <h1>{{title}}</h1>
        <!--
        <ul class="product">
            <li *ngFor="let product of products">
                <span class="badge">{{product.id}}</span> {{product.name}}
            </li>
        </ul>
        <form #productForm="ngForm" (ngSubmit)="onSubmit(productForm)" novalidate>
            <label for="product_name">Product Name</label>
            <input ngModel name="product_name" #productName="ngModel" id="product_name"
                   type="text"/>
            <button type="submit">Submit</button>
        </form>
        -->
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/products">Products</a>
        <router-outlet></router-outlet>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }

        .product {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }

        .product li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }

        .product li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }

        .product li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }

        .product .text {
            position: relative;
            top: -3px;
        }

        .product .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
})

export class AppComponent implements OnInit {

    ngOnInit(): void {
        this.getProducts();
    }

    title = 'Product Cart';

    constructor(private productService: ProductService) {
    }

    products: Product[];

    getProducts(): void {
        this.productService.getProductsSlowly().then(
            products => this.products = products
        );
    }

    onSubmit(productForm: NgForm) {
        const addedProduct = new Product();
        addedProduct.id = 1;
        addedProduct.name = productForm.value.product_name;
        this.products.push(addedProduct);
    }


}
