import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Route } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';



@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 
 
  dologin = false;

  signUp: FormGroup = new FormGroup({
   'Name' : new FormControl(" "),
    'Password' : new FormControl(" "),
    'Email' : new FormControl(" ")
  })

  LoginUp: FormGroup = new FormGroup({
    'Email' : new FormControl(" "),
    'Password' : new FormControl(" ")
  })

 



  constructor(private seller:SellerService ){}
  ngOnInit(): void {
  
    // this.seller.reloadSeller()

  }

  postUser(){
    this.seller.userSign(this.signUp.value)
  }

 openLogin(){
  this.dologin = true;
 }

 openSignUp(){
  this.dologin = false;
 }


  }
 

 



