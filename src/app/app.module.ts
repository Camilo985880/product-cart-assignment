import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductComponent} from "./products/product.component";
import {ProductService} from "./product.service";
import {ProductDetailComponent} from "./detail/product.detail.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
