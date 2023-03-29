import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

 
addProduct(data:products){
  return this.http.post(`http://localhost:3000/products`,data)
}

displayList(){
  return this.http.get<products>(`http://localhost:3000/products`)
}

deletePro(id:number){
  return this.http.delete(`http://localhost:3000/products/${id}`)
}

popularProducts(){
  return this.http.get<products>(`http://localhost:3000/products?_limit=3`)
}

trendProducts(){
  return this.http.get<products>(`http://localhost:3000/products?_limit=8`)
}

searchProduct(query:string){
  return this.http.get<products>(`http://localhost:3000/products?q=${query}`)
}

}
