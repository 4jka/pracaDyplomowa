import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PageLogRegComponent } from "./page-log-reg.component";
import { PageLogRegRoutingModule } from "./page-log-reg-routing.module";
import { changeBgImageDirective } from "./directives/changeBgImage.directive";
import { LogInComponent } from "./log-in/log-in.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { PageLogRegService } from "./page-log-reg.service";

@NgModule({
    declarations: [
      PageLogRegComponent,
      LogInComponent,
      SignInComponent,
      changeBgImageDirective
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PageLogRegRoutingModule
    ],
    providers: [
      PageLogRegService
    ]
  })

  export class PageLogRegModule{}