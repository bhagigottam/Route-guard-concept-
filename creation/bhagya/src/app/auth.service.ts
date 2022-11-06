import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(route);
    console.log(state);
    console.log(state.url);
    let a:any;
    a = localStorage.getItem("userDetails");
    a= JSON.parse(a);
    if(a.loggedIn==false){
      return false;
    }else if(a.loggedIn==true&&state.url.includes("admin")&&a.userType!="admin"){
      return false;
    }else if(a.loggedIn==true&&state.url.includes("user")&&a.userType!="user"){
      return false;
    }
    
    return true;
    
  }

  constructor() { }
}
