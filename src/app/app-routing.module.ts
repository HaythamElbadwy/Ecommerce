import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandComponent } from './brand/brand.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent,title:"HomeComponent"},
  {path:"about",canActivate:[authGuard],component:AboutComponent,title:"aboutcomponent"},
  {path:"cart",canActivate:[authGuard],component:CartComponent,title:"CartComponent"},
  {path:"products",canActivate:[authGuard],component:ProductsComponent,title:"productscomponent"},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent,title:"CategoriesComponent"},
  {path:"brands",canActivate:[authGuard],component:BrandComponent,title:"brandComponent"},
  {path:"productDetails/:id",canActivate:[authGuard],component:ProductDetailsComponent,title:"productDetailscomponent"},
  {path:"setting",canActivate:[authGuard],loadChildren: () => import('./setting/setting.module').then((x)=> x.SettingModule) },
  

  {path:"signup",component:SignUpComponent},
  {path:"signin",component:SignInComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"checkout/:cartId",component:CheckoutComponent},
  {path:"allorders",component:OrdersComponent},
  {path:"wishlist",component:WishlistComponent},
  
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  


  {path:"**",component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
