import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  isLoading:boolean = false;

  apiError :string =''
constructor(private _authService:AuthService,private _router:Router){

}


  registerForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
    rePassword: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)])
  },{
    validators: this.validationRePassword
  })

  register(form:FormGroup){
    console.log("hii",form);
    if(form.valid){
      this.isLoading = true
      this._authService.register(form.value).subscribe({
        next:(data) =>{
          console.log(data);
          this.isLoading = false
          this._router.navigate(['/signin'])
        },
      error:(err) =>{
        console.log(err.error.message);
        this.apiError = err.error.message
      }
      })
    }
  
}

validationRePassword(registerForm:any){
  let passwordControl = registerForm.get("password")
  let rePasswordControl= registerForm.get("rePassword")
  if(passwordControl.value == rePasswordControl.value){
    return null;
  }else{
    rePasswordControl.setErrors({rePasswordNotMatch : "password and repassword should be matched"})
    return {rePasswordNotMatch : "password and repassword should be matched"}
  }
}
}
