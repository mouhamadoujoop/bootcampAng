import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email?: string, pwd?: string): boolean {
    return (email == "afaye@samanecorporation.com" && pwd == "passer") ? true : false;
  }

}
