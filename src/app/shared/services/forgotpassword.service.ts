import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:string = `https://route-ecommerce.onrender.com/api/v1/auth/`

  forgotPassword(userEmail:object):Observable<any>{
    return this._httpClient.post(this.baseUrl + `forgotPasswords`,userEmail)
  }
  
  resetCode(resetCode:object):Observable<any>{
    return this._httpClient.post(this.baseUrl + `verifyResetCode`,resetCode)
  }

  resetPassword(resetPasswordForm:object):Observable<any>{
    return this._httpClient.put(this.baseUrl + `resetPassword`,resetPasswordForm)
  }
}
