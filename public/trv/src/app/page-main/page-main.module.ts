import { NgModule } from "@angular/core";
import { PageSearchComponent } from "./page-search/page-search.component";
import { PageDescription } from "./page-description/page-description.component";
import { FieldSearchComponent } from "./page-search/field-search/field-search.component";
import { PlacesTapeComponent } from "./page-search/places-tape/places-tape.component";
import { PageDescriptionPlus } from "./page-description/page-description-plus/page-description-plus.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { ScrollModule } from "../_shared/directives/scroll/scroll.module";
import { RouterModule } from "../../../node_modules/@angular/router";
import { PageSearchService } from "./page-search/page-search.service";
import { PageDescriptionService } from "./page-description/page-description.service";
import { PageDescriptionPlusService } from "./page-description/page-description-plus/page-description-plus.service";
import { PageMainComponent } from "./page-main.component";
import { PageMainRouting } from "./page-main-routing.module";

@NgModule({
  declarations: [
    PageMainComponent,
    PageSearchComponent,
    PlacesTapeComponent,
    FieldSearchComponent,
    PageDescription,
    PageDescriptionPlus
  ],
  imports: [
    CommonModule,
    PageMainRouting,
    ScrollModule,
    RouterModule
  ],
  providers: [
    PageSearchService,
    PageDescriptionService,
    PageDescriptionPlusService
  ]
})

export class PageMainModule{}


