import {Component, OnInit} from "@angular/core";
import {Product} from "../Product";
import {ProductService} from "../product.service";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'product-detail',
    templateUrl: './product.detail.component.html'
})

export class ProductDetailComponent implements OnInit {

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
            .subscribe(product => this.product = product);
    }

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private location: Location
    ) {}

    product: Product;

}