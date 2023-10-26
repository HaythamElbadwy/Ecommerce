import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  count:BehaviorSubject <number> = new BehaviorSubject(0)


    baseUrl:string = `https://route-ecommerce.onrender.com/api/v1/`
  constructor(private _httpClient:HttpClient) { 
    this.getWishList().subscribe({
      next:(res) =>{
        
        this.count.next(res.count)
        
      }
    })
  }

  

  addToWishList(productId:any):Observable<any>{
    return this._httpClient.post(this.baseUrl + `wishlist`,
    {
      productId: productId
    })

  }

  getWishList():Observable<any>{
  return this._httpClient.get(this.baseUrl + `wishlist`)
  }

  removerWishList(productId:any):Observable<any>{
    return this._httpClient.delete (this.baseUrl + `wishlist/${productId}`)
    }
}
