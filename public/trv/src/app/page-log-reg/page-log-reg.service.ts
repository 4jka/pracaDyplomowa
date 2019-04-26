
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CommonService } from "../app.service";
import { InfoLogForm } from "./log-in/log-in.interface";

@Injectable()
export class PageLogRegService{

    constructor(private http: Http,
                private commonService: CommonService){}    
               

    entryUserLogin(infoLogForm: InfoLogForm)
    {
      return this.http.post(this.commonService.getServerUrl() + '/login',{ infoLogForm });
    }  
    entryUserSignIn(infoSignForm)
    {
      return this.http.post(this.commonService.getServerUrl() + '/registration',{ infoSignForm });
    }   
    entryFacebook()
    {
      return this.http.get(this.commonService.getServerUrl() + '/facebook');
    }  
}