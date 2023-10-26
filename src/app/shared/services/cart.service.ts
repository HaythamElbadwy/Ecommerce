import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject <number> = new BehaviorSubject(0)
  cartId:BehaviorSubject <string> = new BehaviorSubject('')

  constructor(private _http: HttpClient) {

    this.getCart().subscribe({
      next:(res) =>{
        this.numOfCartItems.next(res.numOfCartItems)
        this.cartId.next(res.data._id)
        
      }
    })
   }
  addProductToCart(id: string): Observable<any> {
    return this._http.post('https://route-ecommerce.onrender.com/api/v1/cart', {
      productId: id
    },
      {
        headers: {
          token: `${localStorage.getItem("userToken")}`
        }
      })

  }


  getCart(): Observable<any> {
    return this._http.get('https://route-ecommerce.onrender.com/api/v1/cart',

      )

  }
  updateProductCount(count:number,id:string): Observable<any> {
    return this._http.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`, {

    count:`${count}`
    },
)

  }

  removeProduct(id:string): Observable<any> {
    return this._http.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,

   )

  }
  generateOnlinePayment(cartId:string,shippingAddress:any): Observable<any> {
    return this._http.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
{shippingAddress:shippingAddress},
   )

  }
}
