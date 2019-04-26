import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PageDescription } from './page-description/page-description.component';
import { PageMainComponent } from './page-main.component';
import { PageDescriptionPlus } from './page-description/page-description-plus/page-description-plus.component';
import { AuthGuard } from '../auth-quard.service';

const pageMain :Routes = [
    { path: '', component: PageMainComponent, children: [
      {path: 'description/:id_place', component: PageDescription, children: [
        { path: 'add', canActivate: [AuthGuard], component: PageDescriptionPlus }
      ]},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(pageMain)
  ],
  exports:[
    RouterModule  
  ]
})

export class PageMainRouting{}
