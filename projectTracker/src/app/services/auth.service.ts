import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated: boolean = false;
  returnUrl: string='';
  constructor() { }

  validateUser(userName: string, password:string):void{
    if (userName ==='test' && password == '123456') {
      this.isUserAuthenticated = true;
    }
    else{
      this.isUserAuthenticated = false;
    }
  }
}
