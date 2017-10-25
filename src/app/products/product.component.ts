import {Component, OnInit} from "@angular/core";
import {Product} from "../Product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'product-list',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {

    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getProducts();
    }

    products: Product[] = [];
    selectedProduct: Product;

    getProducts(): void {
        this.productService.getProductsSlowly().then(
            products => this.products = products
        );
    }

    onSelectProduct(selectedProduct: Product) {
        this.selectedProduct = selectedProduct;
    }

    goToDetail(): void {
        this.router.navigate(['detail', this.selectedProduct.id])
    }

}