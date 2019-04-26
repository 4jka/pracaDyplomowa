import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PageLogRegComponent } from './page-log-reg.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';


const pageLogRegRouts: Routes = [
    { path: '', component: PageLogRegComponent, children: [
      {path: 'log-in', component: LogInComponent},
      {path: 'sign-in', component: SignInComponent},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(pageLogRegRouts)
  ],
  exports:[
    RouterModule  
  ]
})

export class PageLogRegRoutingModule{}
