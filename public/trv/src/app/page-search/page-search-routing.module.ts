import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PageSearchComponent } from './page-search.component';

const pageSearchRouts: Routes = [
    { path: '', component: PageSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pageSearchRouts)
  ],
  exports:[
    RouterModule  
  ]
})

export class PageSearchRoutingModule{}
