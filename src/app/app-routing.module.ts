import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductGuard } from './auth/add-product.guard';
import { SellerHomeGuard } from './auth/seller-home.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {path:' ',component:HomeComponent},
  {path:'seller-auth',component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent , canActivate:[SellerHomeGuard]},
  {path:'seller-add-pro',component:SellerAddProductComponent , canActivate:[AddProductGuard]},
  {path:'search/query',component:SearchProductComponent},
  {path:'product-detail/:productId',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
