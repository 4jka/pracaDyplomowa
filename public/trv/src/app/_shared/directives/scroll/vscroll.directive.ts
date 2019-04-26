import { Directive, OnInit, ElementRef, HostListener } from "@angular/core";
import { ScrollService } from "./scroll.service";


@Directive({
    selector: '[vscroll]'
})

export class VscrollDirective{
   
    constructor(private element: ElementRef,
                private scrollServise: ScrollService){}


    @HostListener('window:mousewheel', ['$event']) onScroll(event:Event):void {
     let newScroll = this.getValueScroll(event);

         if(newScroll.valueScroll + newScroll.delta <= 0){
            if(this.element.nativeElement.getBoundingClientRect().bottom + newScroll.delta < this.element.nativeElement.parentNode.getBoundingClientRect().height) return;
            this.element.nativeElement.style.top = (newScroll.valueScroll += newScroll.delta) + "px";
        }
    }

    getValueScroll(event:Event){
        return {
            delta: -this.scrollServise.getDelta(event),
            valueScroll: parseInt( (this.element.nativeElement.style.top || '0px').replace('px','') )
        };
    }    
}






