import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {


   }

   perform:any=FormGroup;

  ngOnInit(): void {
    this.perform= new FormGroup({
      name:new FormControl('bhagya'),
      password:new FormControl(' ')
    })
  }
  
  onSubmit(form:FormGroup){
console.log(form);
let userdetails = {name:"",userType:"user",loggedIn:false};
    if(this.perform.value.name=="admin"&&this.perform.value.password=="12345"){
      userdetails.loggedIn=true;
      userdetails.name = this.perform.value.name;
      userdetails.userType = "admin";
    }else if(this.perform.value.name!="admin"&&this.perform.value.password=="98485"){
      userdetails.loggedIn=true;
      userdetails.name = this.perform.value.name;
      userdetails.userType = "user";
    }

    if(userdetails.loggedIn==false){
      alert("please enter correct password!");
      return;
    }
    
    console.log(userdetails);
    localStorage.setItem("userDetails",JSON.stringify(userdetails));
    if(userdetails.userType=="admin"){
      this.router.navigate(['/admin'])
    }else if(userdetails.userType=="user"){
this.router.navigate(['/user'])
    }


  }
}
