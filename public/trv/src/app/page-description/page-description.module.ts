import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageDescription } from "./page-description.component";
import { PageDecriptionRoutingModule } from "./page-description-routing.module";
import { PageDescriptionService } from "./page-description.service";
import { PageDescriptionPlus } from "./page-description-plus/page-description-plus.component";
import { PageDescriptionPlusService } from "./page-description-plus/page-description-plus.service";

@NgModule({
    declarations: [
      PageDescription,
      PageDescriptionPlus
    ],
    imports: [
      CommonModule,
      PageDecriptionRoutingModule
    ],
    providers: [
      PageDescriptionService,
      PageDescriptionPlusService
    ]
  })

export class PageDescriptionModule{}