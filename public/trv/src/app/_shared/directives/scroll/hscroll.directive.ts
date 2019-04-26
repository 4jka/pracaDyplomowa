import { Directive, OnInit, HostListener, ElementRef } from "@angular/core";
import { ScrollService } from "./scroll.service";


@Directive({
    selector: '[hscroll]'
})

export class HscrollDirective implements OnInit{
   
    constructor(private element: ElementRef,
                private scrollServise: ScrollService){}

    ngOnInit(){}

    @HostListener('window:mousewheel', ['$event']) onScroll(event:Event):void {
        let newScroll = this.getValueScroll(event);
            if(newScroll.valueScroll + newScroll.delta >= 0){
                if(this.element.nativeElement.getBoundingClientRect().right - newScroll.delta < this.element.nativeElement.parentNode.getBoundingClientRect().width) return;
                this.element.nativeElement.style.right = (newScroll.valueScroll += newScroll.delta) + "px";
            }
            return; 
    };

    getValueScroll(event:Event){
        return {
            delta: this.scrollServise.getDelta(event),
            valueScroll: parseInt ( (this.element.nativeElement.style.right || '0px').replace('px','') )
        };
    }
}







