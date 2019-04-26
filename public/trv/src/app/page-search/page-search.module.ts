import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { PageSearchComponent } from './page-search.component';
import { PlacesTapeComponent } from './places-tape/places-tape.component';
import { FieldSearchComponent } from './field-search/field-search.component';
import { PageSearchService } from './page-search.service';
import { ScrollModule } from '../_shared/directives/scroll/scroll.module';
import { PageSearchRoutingModule } from './page-search-routing.module';

@NgModule({
  declarations: [
    PageSearchComponent,
    PlacesTapeComponent,
    FieldSearchComponent
  ],
  imports: [
    CommonModule,
    ScrollModule,
    PageSearchRoutingModule
  ],
  providers: [
    PageSearchService
  ]
})

export class PageSearchModule{ }
