import { NgModule } from '@angular/core';
import { Routes,RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-quard.service';

const appRouts: Routes = [
    { path: 'form', loadChildren: './page-log-reg/page-log-reg.module#PageLogRegModule' },
    { 
      path: 'group', canActivate: [AuthGuard],
      loadChildren: './page-group-places/page-group-places.module#PageGroupPlacesModule' 
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouts,{
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports:[
    RouterModule 
  ]
})
export class AppRoutingModule{}
