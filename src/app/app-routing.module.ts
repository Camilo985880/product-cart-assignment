import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductComponent} from "./products/product.component";
import {ProductDetailComponent} from "./detail/product.detail.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    /*
        adds RouterModule to exports so that the components in the
        companion module have access to Router declarables, such as
        RouterLink and RouterOutlet
     */
})

export class AppRoutingModule {

}