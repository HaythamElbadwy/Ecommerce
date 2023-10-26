import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../shared/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() product: Product = {} as Product;
  constructor(private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _toastrService: ToastrService) {

  }

  wishListData: string[] = []

  ngOnInit(): void {
    this._wishlistService.getWishList().subscribe({
      next: (res) => {
        const newData = res.data.map((item: any) => item.id);
        this.wishListData = newData

      }
    })
  }
  addToCart(id: string) {
    this._cartService.addProductToCart(id).subscribe({
      next: (res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems);
        this._toastrService.success(res.message);
      }


    })
  }

  addfavourite(productId: any): void {
    this._wishlistService.addToWishList(productId).subscribe({
      next: (res) => {
        // this._wishlistService.count.next(res.count);
        this._toastrService.success(res.message);
        
        this.wishListData = res.data;
        


      }
    })
  }

  removeFavourite(productId: any): void {
    this._wishlistService.removerWishList(productId).subscribe({
      next: (res) => {
        // this._wishlistService.count.next(res.count);
        this._toastrService.success(res.message);
        this.wishListData = res.data

      }
    })
  }
}
