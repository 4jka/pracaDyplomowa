import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CommonService } from './app.service';
import { HttpModule } from '@angular/http';
import { PageGroupPlacesModule } from './page-group-places/page-group-places.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-quard.service';
import { PageMainModule } from './page-main/page-main.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    PageMainModule,
    PageGroupPlacesModule,
    AppRoutingModule
  ],
  providers: [
    CommonService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
