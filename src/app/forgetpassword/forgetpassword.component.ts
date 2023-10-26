import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from '../shared/services/forgotpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  constructor(private _forgotpasswordService: ForgotpasswordService,private _router:Router) { }
  useremail: boolean = true;
  resetcode: boolean = false;
  resetpassword: boolean = false;
  email: string = '';
  

  userMessage: string = '';

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(''),
  })

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
  })

  forgotPassword(): void {
    let userEmail = this.forgotForm.value;
    this.email = userEmail.email;
    this._forgotpasswordService.forgotPassword(userEmail).subscribe({
      next: (res) => {

        this.userMessage = res.message;
        this.useremail = false;
        this.resetcode = true;
      },
      error: (err) => {
        this.userMessage = err.error.message
      }
    })
  }
  resetCode(): void {
    let resetCode = this.resetCodeForm.value;

    this._forgotpasswordService.resetCode(resetCode).subscribe({
      next: (res) => {
        console.log(res);
        this.userMessage = res.status;
        this.resetcode = false;
        this.resetpassword = true;
      },
      error: (err) => {
        this.userMessage = err.error.message
      }

    })


  }


  newPassword(): void {
    let resetPassword = this.resetPasswordForm.value;

    resetPassword.email = this.email
    this._forgotpasswordService.resetPassword(resetPassword).subscribe({
      next: (res) => {
        if(res.token){
          localStorage.setItem('userToken',res.token);
          this._router.navigate(['/signin'])
        }
      
      }
     

    })
  }
}