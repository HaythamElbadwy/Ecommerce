import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoading: boolean = false;

  apiError: string = ''
  constructor(private _authService: AuthService, private _router: Router) {

  }


  loginForm: FormGroup = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),

  })

  login(form: FormGroup) {
   
    if (form.valid) {
      this.isLoading = true
      this._authService.login(form.value).subscribe({
        next: (data) => {
          console.log(data);
          this.isLoading = false
          localStorage.setItem("userToken" , data.token)
          this._authService.getUserData()
          this._router.navigate(['/home'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.apiError = err.error.message
        }
      })
    }

  }
}
