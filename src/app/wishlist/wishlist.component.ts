import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../shared/services/wishlist.service';
import { Product } from '../product';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private _wishlistService: WishlistService,
    private _cartService: CartService,
    private _toastrService: ToastrService) { }
  product: Product = {} as Product;
  allProduct: Product[] = [];
  wishListData: string[] = [];

  ngOnInit(): void {
    this._wishlistService.getWishList().subscribe({
      next: (res) => {
        console.log(res);
        this.allProduct = res.data;
        const newData = res.data.map((item: any) => item.id);
        this.wishListData = newData;
      }
    })
  }

  addToCart(id: string) {
    this._cartService.addProductToCart(id).subscribe({
      next: (res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        this._toastrService.success(res.message)
      }


    })
  }

  addfavourite(productId: any): void {
    this._wishlistService.addToWishList(productId).subscribe({
      next: (res) => {
        // this._wishlistService.count.next(res.count);
        this._toastrService.success(res.message);
        
        this.wishListData = res.data


      }
    })
  }

  removeFavourite(productId: any): void {
    this._wishlistService.removerWishList(productId).subscribe({
      next: (res) => {
        // this._wishlistService.count.next(res.count);
        this._toastrService.success(res.message);
        this.wishListData = res.data;
        const newProductsData = this.allProduct.filter((item) => this.wishListData.includes(item.id))
        this.allProduct = newProductsData;
      }
    })
  }
}
