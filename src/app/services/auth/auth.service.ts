import { getAccessToken } from 'src/app/utils/jwt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true
  }

  public getToken() {
    const token = getAccessToken();
    return token;
  }
}
