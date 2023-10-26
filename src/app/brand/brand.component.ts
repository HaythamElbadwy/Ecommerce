import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {



  allBrands: Brands[] = []

  constructor(private _productsService:ProductsService) {

  }
  ngOnInit(): void {
    this.getAllBrands()
  }

  getAllBrands() {
    this._productsService.getBrands().subscribe({
      next: (res) => {
        console.log(res.data)
        this.allBrands = res.data
      }
    })
  }
}
