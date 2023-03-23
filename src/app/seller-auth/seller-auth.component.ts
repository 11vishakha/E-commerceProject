import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  ngOnInit(): void {
    


  }
 


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


  
  
 openLogin(){
  this.dologin = true
 }

 openSignUp(){
  this.dologin = false
 }


  }
 

 



