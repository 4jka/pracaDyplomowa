import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageLogRegService } from '../page-log-reg.service';
import { InfoLogForm } from './log-in.interface';
import { AuthGuard } from '../../auth-quard.service';
import { Router } from '@angular/router';

@Component({
    selector: 'log-in',
    templateUrl: './log-in.component.html'
})

export class LogInComponent implements OnInit{

    formLogin: FormGroup;

    getFormLoginEmail(){
        return this.formLogin.value.email;
    }
    getFormLoginPassword(){
        return this.formLogin.value.password;
    }

    constructor( private logRegService: PageLogRegService,
                 private router: Router,
                 private authGuard :AuthGuard ){}

    ngOnInit(){
        this.validationFormLogin();
    }

    validationFormLogin(){
        this.formLogin = new FormGroup({
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

    loginSubmit(){

       let infoLogForm: InfoLogForm= {
            email: this.getFormLoginEmail(),
            password: this.getFormLoginPassword()
       }

       this.logRegService.entryUserLogin(infoLogForm)
        .subscribe((response : Response) => 
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
                alert('Nie ma takiego uzytkownika');
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
