import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollService } from "./scroll.service";
import { HscrollDirective } from "./hscroll.directive";
import { VscrollDirective } from "./vscroll.directive";



@NgModule({
    declarations: [
        HscrollDirective,
        VscrollDirective
    ],
    imports: [
      CommonModule
    ],
    exports: [
        HscrollDirective,
        VscrollDirective
    ],
    providers:[ ScrollService ]
})
  
export class ScrollModule{ }