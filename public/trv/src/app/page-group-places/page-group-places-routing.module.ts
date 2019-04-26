import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PageGroupPlaces } from './page-group-places.component';
import { PlaceOfGroup } from './place-of-group/place-of-group.component';
import { ListGroup } from './list-group/list-group.component';

const pageGroupPlaces: Routes = [
    { path: '', component: PageGroupPlaces , children: [
      { path: 'list', component: ListGroup },
      { path: 'places/:idGroup', component: PlaceOfGroup }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(pageGroupPlaces)
  ],
  exports:[
    RouterModule  
  ]
})

export class PageGroupPlacesRoutingModule{}

