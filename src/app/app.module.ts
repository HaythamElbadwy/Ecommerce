import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SliderWrapperComponent } from './slider-wrapper/slider-wrapper.component';
import { TremPipe } from './trem.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    BrandComponent,
     NotFoundComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliderWrapperComponent,
    TremPipe,
    SearchPipe,
    CheckoutComponent,
    OrdersComponent,
    LoaderComponent,
    ForgetpasswordComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
