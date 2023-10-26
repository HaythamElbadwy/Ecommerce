import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../shared/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number = 0;
  count:number = 0
  isLoggedIn:boolean = false;
  constructor(private _authService:AuthService,private _cartService:CartService,
    private _wishlistService:WishlistService){
    this._authService.userData.subscribe((res) =>{
      if(this._authService.userData.getValue()){

        this.isLoggedIn = true
      }else{
        this.isLoggedIn = false
      }
      this._cartService.numOfCartItems.subscribe(res =>{
        this.numOfCartItems = res
      })
      this._wishlistService.count.subscribe(res =>{
        this.count = res
      })
    })

    
  }
  logOut(){
    this._authService.logOut()
  }
}
