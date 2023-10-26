import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product:Product = {} as Product
  allProduct:Product[] = []
  constructor(private _productsService:ProductsService){

  }

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct(){
   this._productsService.getProducts().subscribe({
     next:(data)=>{
       console.log(data);
       this.allProduct = data.data
     },
   })
  }
  
}
