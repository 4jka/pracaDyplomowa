import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PageDescription } from './page-description.component';
import { PageDescriptionPlus } from './page-description-plus/page-description-plus.component';
import { AuthGuard } from '../auth-quard.service';

const pageDescriptionRouts: Routes = [
    { path: 'place/:id_place', component: PageDescription, children: [
      { path: 'add', canActivate: [AuthGuard], component: PageDescriptionPlus }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(pageDescriptionRouts)
  ],
  exports:[
    RouterModule  
  ]
})

export class PageDecriptionRoutingModule{}

