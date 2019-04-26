import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageLogRegService } from '../page-log-reg.service';
import { Response } from "@angular/http";
import { AuthGuard } from '../../auth-quard.service';
import { Router } from '@angular/router';


@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent{

    formSignIn: FormGroup;

    getFormLoginEmail(){
        return this.formSignIn.value.email;
    }
    getFormLoginPassword(){
        return this.formSignIn.value.password;
    }
    getFormLoginUsername(){
        return this.formSignIn.value.username;
    }

    constructor( private logRegService :PageLogRegService,
                 private router :Router,
                 private authGuard :AuthGuard ){}

    ngOnInit(){
        this.validationFormSignIn();
    }
    validationFormSignIn(){
        this.formSignIn = new FormGroup({
          username: new FormControl('',Validators.required),
          email: new FormControl('',[Validators.required,Validators.email]),
          password: new FormControl('',[Validators.required,this.checkForLength.bind(this)])
        });
    }
    checkForLength(control: FormControl){
        if(control.value.length <= 6){
          return{
            'lengthError': true
          };
        }
    }

    signInSubmit(){
        let infoSignForm = {
            user_name : this.getFormLoginUsername(),
            email: this.getFormLoginEmail(),
            password: this.getFormLoginPassword()
       } 
       this.logRegService.entryUserSignIn(infoSignForm).subscribe((response : Response) => 
       {
            const data = response.json();

            if(isSuccess())
            {
                this.authGuard.setIdUser(data.id)
                this.authGuard.onLogIn();
                this.authGuard.setToken( data.token )
                this.router.navigate(['/']);
            }

            function isSuccess()
            {
              if(data.success === false) 
              {
                alert('Taki uzytkownik juz istnieje');
                return false;
              }
              return true;
            }

       });
    }

    entryFacebook()
    {
      this.logRegService.entryFacebook()
       .subscribe((response : Response) => 
        {
            const data = response.json();
            console.log(data);
        });
    }

}