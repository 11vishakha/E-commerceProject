import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  sellerName: string = " ";

  searchResult : undefined | products

  menuType: string = 'default';
  constructor(private rout: Router, private pro:ProductService) { }

  ngOnInit(): void {

    this.rout.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("in seller area")
          this.menuType = "seller"
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }
      }
    })

  }






logout(){
  localStorage.removeItem('seller')
  this.rout.navigate([' '])
}


searchProduct(quary: KeyboardEvent){

  if(quary){
    const element=quary.target as HTMLInputElement

    this.pro.searchProduct(element.value).subscribe((res)=>{
      if(res.length>5){
        res.length=length;
      }
      

      this.searchResult=res;
    })
  }

}









}







