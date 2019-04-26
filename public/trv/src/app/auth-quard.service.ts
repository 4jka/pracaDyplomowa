import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
    
 idUser :number = 21; 
 isLogIn: boolean = true;
 token :string ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInVzZXJuYW1lIjoiVmFkaW0gcGlkb3IiLCJlbWFpbCI6InZhZGltQGdtYWlsLmNvbSIsImlhdCI6MTU0ODU5NTQyN30.4z5q_WVRJp-WIe0ERgDd13pFcQJUTHQ5iq0cH2cCo2M";

 onLogIn() :void{
  this.isLogIn = true;
 }
 setIdUser(idUser :number){
  this.idUser = idUser;
 }
 setToken(token:string){
   this.token = token;
 }

 getLogIn() :boolean{
  return this.isLogIn;
 }
 getIdUser() :number{
   return this.idUser;
 }
 getToken() :string{
   return this.token;
 }

 clearAuth():void {
  this.idUser = null;
  this.isLogIn = false;
  this.token = null; 
 }
 
 canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
   ): Observable<boolean> | Promise<boolean> | boolean{ 
      if(this.getLogIn()){
        return true;
      }else{
        alert('Potrzebno zalogowac sie');
        return false;
      }
  }
}