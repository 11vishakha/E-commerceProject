
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient , private route:Router) { }

 userSign(data:SignUp){
  this.http.post(`http://localhost:3000/seller`,data,{observe:'response'}).subscribe((res)=>{
    this.isSellerLoggedIn.next(true);
    localStorage.setItem('seller', JSON.stringify(res.body))
    this.route.navigate(['seller-home'])
  });
 }

}
